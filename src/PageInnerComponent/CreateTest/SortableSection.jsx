// components/SortableSection.jsx (or inline in CreateTestLeft)
import React, { useState } from 'react';
import {
  IconButton,
  Button,
  Chip,
  Modal,
  Box,
  Typography,
  TextField
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';
import { MdDelete, MdDeleteOutline, MdDragIndicator } from "react-icons/md";
import { FaRegBookmark, FaClock } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateSection,
  deleteSection,
  setSelectedSection,
  removeTopicFromSection
} from '../../store/Slices/testSlice';

const SortableSection = ({ section }) => {
  const dispatch = useDispatch();
  const selectedSectionId = useSelector(s => s.test.selectedSectionId);
  const isSelected = selectedSectionId === section.id;

  const [openEditModal, setOpenEditModal] = useState(false);
  const [sectionName, setSectionName] = useState(section.sectionName);
  const [timeLimit, setTimeLimit] = useState(section.timeLimit);
  const [isShuffle, setIsShuffle] = useState(section.isShuffle);
  // Time limit is ALWAYS ON by default
  const [isTimeLimit, setIsTimeLimit] = useState(section.isTimeLimit !== false); // default true

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: section.id });
  const style = { transform: CSS.Transform.toString(transform), transition };

  const handleSave = () => {
    dispatch(updateSection({
      sectionId: section.id,
      sectionName,
      timeLimit: Number(timeLimit),
      isShuffle,
      isTimeLimit: true // always save as true
    }));
    setOpenEditModal(false);
  };

  const hasTopics = section.sectionTopics.length > 0;

  return (
    <>
      <div ref={setNodeRef} style={style} {...attributes}>
        <div 
          className="test-card" 
          style={{ 
            border: isSelected ? "2px solid #A31DE5" : "1px solid #e0e0e0", 
            borderRadius: "12px", 
            overflow: "hidden",
            background: "#fff"
          }}
        >
          <div className='test_dnd_left' {...listeners}>
            <MdDragIndicator style={{ cursor: "grab", fontSize: "20px", color: "#999" }} />
          </div>

          <div 
            className='test_dnd_right' 
            style={{ cursor: "pointer" }} 
            onClick={() => dispatch(setSelectedSection(section.id))}
          >
            {/* Header */}
            <div className="test-header">
              <div className="test-title-group">
                <h2 className="test-title">{section.sectionName}</h2>
                <IconButton 
                  size="small" 
                  className="icon-btn" 
                  onClick={(e) => { e.stopPropagation(); setOpenEditModal(true); }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </div>
              <div className="test-actions">
                {/* Time limit always shown since it's always ON */}
                <Chip 
                  icon={<FaClock />} 
                  label={`${section.timeLimit || 30} mins`} 
                  size="small" 
                  className="timer-chip" 
                />
                <IconButton 
                  size="small" 
                  className="icon-btn" 
                  onClick={(e) => { e.stopPropagation(); dispatch(deleteSection(section.id)); }}
                >
                  <MdDelete />
                </IconButton>
                <IconButton size="small" className="icon-btn icon_btn_2">
                  <FaRegBookmark />
                </IconButton>
              </div>
            </div>

            {/* Topics List or Empty State */}
            <div className="skills-list">
              {hasTopics ? (
                section.sectionTopics.map((topic) => (
                  <div key={topic.uniqueId} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{topic.topicName}</span>
                      <span className="question-count">{topic.total || topic.questionCount}</span>
                    </div>
                    <MdDeleteOutline
                      className="download-icon"
                      style={{ cursor: "pointer" }}
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        dispatch(removeTopicFromSection({ 
                          sectionId: section.id, 
                          uniqueId: topic.uniqueId 
                        })); 
                      }}
                    />
                  </div>
                ))
              ) : (
                <div style={{ 
                  textAlign: "center", 
                //   padding: "40px 20px", 
                alignItems: "center",
                margin:"0 auto",
                  color: "#999",
                  fontSize: "14px"
                }}>
                  {/* <IoMdAdd style={{ fontSize: "36px", marginBottom: "12px", color: "#ddd" }} /> */}
                 
                  <Typography variant="caption" color="text.secondary" sx={{textAlign:"center"}}>
                    Click on topics from the right panel to add
                  </Typography>
                </div>
              )}
            </div>

            <Button 
              fullWidth 
              variant="outlined" 
              className="edit-section-btn" 
              onClick={(e) => { e.stopPropagation(); setOpenEditModal(true); }}
            >
              Edit Section
            </Button>
          </div>
        </div>
      </div>

      {/* Edit Modal - Time Limit Toggle Always ON */}
      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <Box sx={{ 
          position: "absolute", 
          top: "50%", 
          left: "50%", 
          transform: "translate(-50%, -50%)", 
          bgcolor: "white", 
          p: 4, 
          borderRadius: 2, 
          boxShadow: 24, 
          width: 650 
        }}>
          <Typography className="invite_inner_heading">Edit Section</Typography>

          {/* Section Name */}
          <Box className="edit_section_main_inner invite_inner_all" sx={{ alignItems: "end" }}>
            <Box sx={{ width: "30%" }}>
              <Typography className="edit_section_inner_text">Section Name</Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <TextField 
                fullWidth 
                label="Section Name" 
                value={sectionName} 
                onChange={e => setSectionName(e.target.value)} 
                placeholder="eg: Technical" 
                variant="standard" 
                className="input_field" 
              />
            </Box>
          </Box>

          {/* Shuffle */}
          <Box className="edit_section_main_inner invite_inner_all">
            <Box sx={{ width: "30%" }}>
              <Typography className="edit_section_inner_text">Shuffle questions</Typography>
            </Box>
            <Box className="toggle-container" sx={{ width: "50%" }}>
              <label className="switch">
                <input type="checkbox" checked={isShuffle} onChange={() => setIsShuffle(!isShuffle)} />
                <span className="slider"></span>
              </label>
            </Box>
          </Box>

          {/* Time Limit - Always ON, no toggle to disable */}
          <Box className="edit_section_main_inner invite_inner_all">
            <Box sx={{ width: "30%" }}>
              <Typography className="edit_section_inner_text">Time limit</Typography>
            </Box>
            <Box className="toggle-container-time" sx={{ width: "70%", display: "flex", alignItems: "center", gap: "10px" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <TextField 
                  type="number" 
                  value={timeLimit} 
                  onChange={e => setTimeLimit(e.target.value)} 
                  className="time_limit_input" 
                  variant="outlined" 
                  size="small" 
                  inputProps={{ min: 1 }}
                />
                <Typography className="time_limit_text">mins</Typography>
              </Box>
            </Box>
          </Box>

          {/* Buttons */}
          <Box sx={{ display: "flex", justifyContent: "end", gap: 2, mt: 4 }}>
            <Button variant="contained" className="invite_cancel_btn" onClick={() => setOpenEditModal(false)}>
              Cancel
            </Button>
            <Button variant="contained" className="invite_save_btn" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default SortableSection;




// // components/SortableSection.jsx
// import React, { useState } from 'react';
// import {
//   IconButton,
//   Button,
//   Chip,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Box,
//   Modal,
  
//   Typography,
//   Slider,
//   Stack,
// } from '@mui/material';
// import { Edit as EditIcon, Close } from '@mui/icons-material';
// import { MdDeleteOutline, MdDragIndicator } from "react-icons/md";
// import { FaRegBookmark, FaClock } from "react-icons/fa6";

// import { useSortable } from '@dnd-kit/sortable';
// import { CSS } from '@dnd-kit/utilities';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   updateSection,
//   deleteSection,
//   setSelectedSection,
//   removeTopicFromSection,
//   updateTopicDifficulty
// } from '../../store/Slices/testSlice';
// import { toast } from 'react-toastify';

// const SortableSection = ({ section }) => {
//   const dispatch = useDispatch();
//   const selectedSectionId = useSelector(s => s.test.selectedSectionId);
//   const isSelected = selectedSectionId === section.id;
//   const sections = useSelector(s => s.test.sections);

//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [sectionName, setSectionName] = useState(section.sectionName);
//   const [timeLimit, setTimeLimit] = useState(section.timeLimit);
//   const [isShuffle, setIsShuffle] = useState(section.isShuffle);

//   // Edit Difficulty Modal State
//   const [openDifficultyEditModal, setOpenDifficultyEditModal] = useState(false);
//   const [editingTopic, setEditingTopic] = useState(null);
//   const [editEasy, setEditEasy] = useState(0);
//   const [editMedium, setEditMedium] = useState(0);
//   const [editHard, setEditHard] = useState(0);

//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: section.id });
//   const style = { transform: CSS.Transform.toString(transform), transition };

//   const handleSave = () => {
//     dispatch(updateSection({
//       sectionId: section.id,
//       sectionName,
//       timeLimit: Number(timeLimit),
//       isShuffle,
//       isTimeLimit: true
//     }));
//     setOpenEditModal(false);
//   };

//   const openEditDifficultyModal = (topic) => {
//     setEditingTopic(topic);
//     setEditEasy(topic.easy || 0);
//     setEditMedium(topic.medium || 0);
//     setEditHard(topic.hard || 0);
//     setOpenDifficultyEditModal(true);
//   };

//   const handleUpdateDifficulty = () => {
//     const total = editEasy + editMedium + editHard;
//     if (total === 0) {
//       toast.warning("Please select at least one question");
//       return;
//     }

//     dispatch(updateTopicDifficulty({
//       sectionId: section.id,
//       uniqueId: editingTopic.uniqueId,
//       easy: editEasy,
//       medium: editMedium,
//       hard: editHard,
//       total
//     }));

//     toast.success(`${editingTopic.topicName} updated!`);
//     setOpenDifficultyEditModal(false);
//   };

//   const hasTopics = section.sectionTopics.length > 0;

//   return (
//     <>
//       <div ref={setNodeRef} style={style} {...attributes}>
//         <div
//           className="test-card"
//           style={{
//             border: isSelected ? "2px solid #A31DE5" : "1px solid #e0e0e0",
//             borderRadius: "12px",
//             overflow: "hidden",
//             background: "#fff"
//           }}
//         >
//           <div className='test_dnd_left' {...listeners}>
//             <MdDragIndicator style={{ cursor: "grab", fontSize: "20px", color: "#999" }} />
//           </div>

//           <div
//             className='test_dnd_right'
//             style={{ cursor: "pointer" }}
//             onClick={() => dispatch(setSelectedSection(section.id))}
//           >
//             {/* Header */}
//             <div className="test-header">
//               <div className="test-title-group">
//                 <h2 className="test-title">{section.sectionName}</h2>
//                 <IconButton
//                   size="small"
//                   onClick={(e) => { e.stopPropagation(); setOpenEditModal(true); }}
//                 >
//                   <EditIcon fontSize="small" />
//                 </IconButton>
//               </div>
//               <div className="test-actions">
//                 <Chip icon={<FaClock />} label={`${section.timeLimit || 30} mins`} size="small" />
//                 <IconButton
//                   size="small"
//                   onClick={(e) => { e.stopPropagation(); dispatch(deleteSection(section.id)); }}
//                 >
//                   <MdDeleteOutline />
//                 </IconButton>
//                 <IconButton size="small">
//                   <FaRegBookmark />
//                 </IconButton>
//               </div>
//             </div>

//             {/* Topics List */}
//             <div className="skills-list">
//               {hasTopics ? (
//                 section.sectionTopics.map((topic) => (
//                   <div key={topic.uniqueId} className="skill-item" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
//                     <div className="skill-info">
//                       <span className="skill-name">{topic.topicName}</span>
//                       <span className="question-count" style={{ marginLeft: 8 }}>
//                         {topic.total} Qs
//                         {topic.easy > 0 && <Chip label={`E:${topic.easy}`} size="small" color="success" sx={{ ml: 0.5, height: 20, fontSize: 10 }} />}
//                         {topic.medium > 0 && <Chip label={`M:${topic.medium}`} size="small" color="warning" sx={{ ml: 0.5, height: 20, fontSize: 10 }} />}
//                         {topic.hard > 0 && <Chip label={`H:${topic.hard}`} size="small" color="error" sx={{ ml: 0.5, height: 20, fontSize: 10 }} />}
//                       </span>
//                     </div>

//                     <div style={{ display: 'flex', gap: 4 }}>
//                       <IconButton
//                         size="small"
//                         onClick={(e) => { e.stopPropagation(); openEditDifficultyModal(topic); }}
//                         sx={{ color: "#7158E2" }}
//                       >
//                         <EditIcon fontSize="small" />
//                       </IconButton>
//                       <MdDeleteOutline
//                         style={{ cursor: "pointer", fontSize: 18, color: "#f44336" }}
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           dispatch(removeTopicFromSection({
//                             sectionId: section.id,
//                             uniqueId: topic.uniqueId
//                           }));
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <Typography variant="caption" color="text.secondary" sx={{ textAlign: "center", display: "block", py: 3 }}>
//                   Click on topics from the right panel to add
//                 </Typography>
//               )}
//             </div>

//             <Button
//               fullWidth
//               variant="outlined"
//               sx={{ mt: 2 }}
//               onClick={(e) => { e.stopPropagation(); setOpenEditModal(true); }}
//             >
//               Edit Section
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Edit Modal - Time Limit Toggle Always ON */}
//       <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
//         <Box sx={{ 
//           position: "absolute", 
//           top: "50%", 
//           left: "50%", 
//           transform: "translate(-50%, -50%)", 
//           bgcolor: "white", 
//           p: 4, 
//           borderRadius: 2, 
//           boxShadow: 24, 
//           width: 650 
//         }}>
//           <Typography className="invite_inner_heading">Edit Section</Typography>

//           {/* Section Name */}
//           <Box className="edit_section_main_inner invite_inner_all" sx={{ alignItems: "end" }}>
//             <Box sx={{ width: "30%" }}>
//               <Typography className="edit_section_inner_text">Section Name</Typography>
//             </Box>
//             <Box sx={{ width: "50%" }}>
//               <TextField 
//                 fullWidth 
//                 label="Section Name" 
//                 value={sectionName} 
//                 onChange={e => setSectionName(e.target.value)} 
//                 placeholder="eg: Technical" 
//                 variant="standard" 
//                 className="input_field" 
//               />
//             </Box>
//           </Box>

//           {/* Shuffle */}
//           <Box className="edit_section_main_inner invite_inner_all">
//             <Box sx={{ width: "30%" }}>
//               <Typography className="edit_section_inner_text">Shuffle questions</Typography>
//             </Box>
//             <Box className="toggle-container" sx={{ width: "50%" }}>
//               <label className="switch">
//                 <input type="checkbox" checked={isShuffle} onChange={() => setIsShuffle(!isShuffle)} />
//                 <span className="slider"></span>
//               </label>
//             </Box>
//           </Box>

//           {/* Time Limit - Always ON, no toggle to disable */}
//           <Box className="edit_section_main_inner invite_inner_all">
//             <Box sx={{ width: "30%" }}>
//               <Typography className="edit_section_inner_text">Time limit</Typography>
//             </Box>
//             <Box className="toggle-container-time" sx={{ width: "70%", display: "flex", alignItems: "center", gap: "10px" }}>
//               <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                 <TextField 
//                   type="number" 
//                   value={timeLimit} 
//                   onChange={e => setTimeLimit(e.target.value)} 
//                   className="time_limit_input" 
//                   variant="outlined" 
//                   size="small" 
//                   inputProps={{ min: 1 }}
//                 />
//                 <Typography className="time_limit_text">mins</Typography>
//               </Box>
//             </Box>
//           </Box>

//           {/* Buttons */}
//           <Box sx={{ display: "flex", justifyContent: "end", gap: 2, mt: 4 }}>
//             <Button variant="contained" className="invite_cancel_btn" onClick={() => setOpenEditModal(false)}>
//               Cancel
//             </Button>
//             <Button variant="contained" className="invite_save_btn" onClick={handleSave}>
//               Save
//             </Button>
//           </Box>
//         </Box>
//       </Modal>

//       {/* === REUSABLE DIFFICULTY EDIT MODAL === */}
//       <Dialog
//         open={openDifficultyEditModal}
//         onClose={() => setOpenDifficultyEditModal(false)}
//         maxWidth="sm"
//         fullWidth
//         PaperProps={{
//           sx: {
//             borderRadius: "18px",
//             overflow: "hidden",
//             boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
//             bgcolor: "#F8F6FF"
//           },
//         }}
//       >
//         <DialogTitle
//           sx={{
//             background: "linear-gradient(135deg, #A31DE5 0%, #7158E2 100%)",
//             color: "white",
//             fontWeight: 700,
//             fontSize: "20px",
//             textAlign: "center",
//             py: 2.5,
//             position: "relative",
//           }}
//         >
//           Update Questions: {editingTopic?.topicName}
//           <IconButton
//             sx={{ position: "absolute", right: 12, top: 12, color: "white" }}
//             onClick={() => setOpenDifficultyEditModal(false)}
//           >
//             <Close />
//           </IconButton>
//         </DialogTitle>

//         <DialogContent sx={{ mt: 2, px: 4, pb: 1 }}>
//           <Stack spacing={4}>
//             <Box sx={{ p: 2.5, borderRadius: "14px", bgcolor: "white", boxShadow: "0px 4px 10px rgba(0,0,0,0.07)" }}>
//               <Typography fontWeight={700} color="#4CAF50">
//                 Easy ({editEasy})
//               </Typography>
//               <Slider
//                 value={editEasy}
//                 onChange={(_, v) => setEditEasy(v)}
//                 max={100}
//                 valueLabelDisplay="auto"
//                 sx={{ color: "#4CAF50", mt: 1 }}
//               />
//             </Box>

//             <Box sx={{ p: 2.5, borderRadius: "14px", bgcolor: "white", boxShadow: "0px 4px 10px rgba(0,0,0,0.07)" }}>
//               <Typography fontWeight={700} color="#FF9800">
//                 Medium ({editMedium})
//               </Typography>
//               <Slider
//                 value={editMedium}
//                 onChange={(_, v) => setEditMedium(v)}
//                 max={100}
//                 valueLabelDisplay="auto"
//                 sx={{ color: "#FF9800", mt: 1 }}
//               />
//             </Box>

//             <Box sx={{ p: 2.5, borderRadius: "14px", bgcolor: "white", boxShadow: "0px 4px 10px rgba(0,0,0,0.07)" }}>
//               <Typography fontWeight={700} color="#F44336">
//                 Hard ({editHard})
//               </Typography>
//               <Slider
//                 value={editHard}
//                 onChange={(_, v) => setEditHard(v)}
//                 max={100}
//                 valueLabelDisplay="auto"
//                 sx={{ color: "#F44336", mt: 1 }}
//               />
//             </Box>

//             <Box sx={{ textAlign: "center", mt: 2 }}>
//               <Typography variant="h6" sx={{ fontWeight: 700, color: "#A31DE5", fontSize: "22px" }}>
//                 Total Questions: {editEasy + editMedium + editHard}
//               </Typography>
//             </Box>
//           </Stack>
//         </DialogContent>

//         <DialogActions sx={{ p: 3, justifyContent: "center", gap: 2 }}>
//           <Button
//             onClick={() => setOpenDifficultyEditModal(false)}
//             sx={{
//               background: "#E4D7F6",
//               color: "#6B21A8",
//               fontWeight: 600,
//               px: 3,
//               borderRadius: "10px",
//               "&:hover": { background: "#D8C7F2" }
//             }}
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             onClick={handleUpdateDifficulty}
//             sx={{
//               background: "linear-gradient(135deg, #A31DE5 0%, #7158E2 100%)",
//               fontWeight: 600,
//               px: 3,
//               borderRadius: "10px",
//               "&:hover": { background: "linear-gradient(135deg, #8D1BC6, #634FD4)" }
//             }}
//           >
//             Update Questions
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default SortableSection;