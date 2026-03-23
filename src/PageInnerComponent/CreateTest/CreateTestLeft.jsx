// import React, { useState } from 'react';
// import {
//     IconButton,
//     Button,
//     Chip,
//     Modal,
//     Box,
//     Typography,
//     TextField
// } from '@mui/material';

// import { Edit as EditIcon } from '@mui/icons-material';
// import { MdDelete, MdDeleteOutline, MdDragIndicator } from "react-icons/md";
// import { FaRegBookmark, FaClock } from "react-icons/fa6";
// import { IoMdAdd } from "react-icons/io";

// const CreateTestLeft = () => {

//     // ---------------------- MODAL STATES ----------------------
//     const [openEditModal, setOpenEditModal] = useState(false);

//     const handleOpenModal = () => setOpenEditModal(true);
//     const handleCloseModal = () => setOpenEditModal(false);

//     const [isShuffleChecked, setIsShuffleChecked] = useState(false);
//     const [isTimeLimitChecked, setIsTimeLimitChecked] = useState(false);
//     const [timeLimit, setTimeLimit] = useState(30);

//     const handleShuffleToggle = () => setIsShuffleChecked(!isShuffleChecked);
//     const handleTimeLimitToggle = () => setIsTimeLimitChecked(!isTimeLimitChecked);
//     const handleTimeLimitChange = (e) => setTimeLimit(e.target.value);


//     return (
//         <>
//             <div className='test-card-main'>

//                 <div className="test-card">

//                     <div className='test_dnd_left'>
//                         <MdDragIndicator />
//                     </div>

//                     <div className='test_dnd_right'>

//                         {/* HEADER */}
//                         <div className="test-header">
//                             <div className="test-title-group">
//                                 <h2 className="test-title">Technical MCQs</h2>

//                                 {/* CLICK TO OPEN MODAL */}
//                                 <IconButton size="small" className="icon-btn" onClick={handleOpenModal}>
//                                     <EditIcon fontSize="small" />
//                                 </IconButton>
//                             </div>

//                             <div className="test-actions">
//                                 <Chip icon={<FaClock />} label="30 mins" size="small" className="timer-chip" />
//                                 <IconButton size="small" className="icon-btn">
//                                     <MdDelete />
//                                 </IconButton>
//                                 <IconButton size="small" className="icon-btn icon_btn_2">
//                                     <FaRegBookmark />
//                                 </IconButton>
//                             </div>
//                         </div>

//                         {/* SKILL ITEMS */}
//                         <div className="skills-list">
//                             <div className="skill-item">
//                                 <div className="skill-info">
//                                     <span className="skill-name">JavaScript</span>
//                                     <span className="question-count">12</span>
//                                 </div>
//                                 <MdDeleteOutline className="download-icon" />
//                             </div>
//                         </div>

//                         {/* BUTTON TO OPEN MODAL */}
//                         <Button
//                             fullWidth
//                             variant="outlined"
//                             className="edit-section-btn"
//                             onClick={handleOpenModal}
//                         >
//                             Edit Section
//                         </Button>

//                     </div>
//                 </div>

//                 <div className='test-card-2'>
//                     <IoMdAdd />
//                     <h4>Add Section</h4>
//                 </div>

//             </div>

//             {/* -------------------------------------------------- */}
//             {/* ---------------------- MODAL ---------------------- */}
//             {/* -------------------------------------------------- */}

//             <Modal open={openEditModal} onClose={handleCloseModal}>
//                 <Box
//                     sx={{
//                         position: "absolute",
//                         top: "50%",
//                         left: "50%",
//                         transform: "translate(-50%, -50%)",
//                         bgcolor: "white",
//                         p: 4,
//                         borderRadius: 2,
//                         boxShadow: 24,
//                         width: 650,
//                     }}
//                 >
//                     <Typography className="invite_inner_heading">Edit Section</Typography>

//                     {/* Shuffle */}

//                       <Box className="edit_section_main_inner invite_inner_all" sx={{alignItems:"end"}}>
//                         <Box sx={{ width: "30%" }}>
//                             <Typography className="edit_section_inner_text">Section Name</Typography>
//                         </Box>

//                         <Box className="toggle-container" sx={{ width: "50%" }}>

//                             <TextField
//                                 fullWidth
//                                 label="Section Name"
//                                 placeholder="eg: Technical"
//                                 variant="standard"
//                                 className="input_field"
//                             />

//                         </Box>
//                     </Box>


//                     <Box className="edit_section_main_inner invite_inner_all">
//                         <Box sx={{ width: "30%" }}>
//                             <Typography className="edit_section_inner_text">Shuffle questions</Typography>
//                         </Box>

//                         <Box className="toggle-container" sx={{ width: "50%" }}>
//                             <label className="switch">
//                                 <input
//                                     type="checkbox"
//                                     checked={isShuffleChecked}
//                                     onChange={handleShuffleToggle}
//                                 />
//                                 <span className="slider"></span>
//                             </label>
//                         </Box>
//                     </Box>

//                     {/* Time Limit */}
//                     <Box className="edit_section_main_inner invite_inner_all">
//                         <Box sx={{ width: "30%" }}>
//                             <Typography className="edit_section_inner_text">Time limit</Typography>
//                         </Box>

//                         <Box className="toggle-container-time" sx={{ width: "70%" }}>
//                             <label className="switch">
//                                 <input
//                                     type="checkbox"
//                                     checked={isTimeLimitChecked}
//                                     onChange={handleTimeLimitToggle}
//                                 />
//                                 <span className="slider"></span>
//                             </label>

//                             <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
//                                 <TextField
//                                     type="number"
//                                     value={timeLimit}
//                                     className="time_limit_input"
//                                     onChange={handleTimeLimitChange}
//                                     variant="outlined"
//                                     size="small"
//                                     sx={{ marginLeft: "10px" }}
//                                     inputProps={{ min: 1 }}
//                                 />
//                                 <Typography className="time_limit_text">mins</Typography>
//                             </Box>
//                         </Box>
//                     </Box>

//                     {/* Buttons */}
//                     <Box sx={{ display: "flex", justifyContent: "end", gap: 2, mt: 4 }}>
//                         <Button variant="contained" className="invite_cancel_btn" onClick={handleCloseModal}>
//                             Cancel
//                         </Button>
//                         <Button variant="contained" className="invite_save_btn">
//                             Save
//                         </Button>
//                     </Box>
//                 </Box>
//             </Modal>
//         </>
//     );
// };

// export default CreateTestLeft;


// components/CreateTestLeft.jsx
import React, { useState, useEffect } from 'react';
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

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { useDispatch, useSelector } from 'react-redux';
import {
  addSection,
  deleteSection,
  updateSection,
  setSelectedSection,
  removeTopicFromSection,
  reorderSections
} from '../../store/Slices/testSlice';
import SortableSection from './SortableSection';


const CreateTestLeft = () => {
  const dispatch = useDispatch();
  const sections = useSelector(s => s.test.sections);
  const selectedSectionId = useSelector(s => s.test.selectedSectionId);

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 10 } }));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      dispatch(reorderSections({ sourceId: active.id, destinationId: over.id }));
    }
  };

  useEffect(() => {
    if (sections.length > 0 && !selectedSectionId) {
      dispatch(setSelectedSection(sections[0].id));
    }
  }, [sections, selectedSectionId, dispatch]);

  return (
    <div className='test-card-container'>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={sections.map(s => s.id)} strategy={verticalListSortingStrategy}>
          <div className='test-card-main'>
            {sections.map(section => (
              <SortableSection key={section.id} section={section} />
            ))}
          </div>
        </SortableContext>
      </DndContext>

      <div className='test-card-2' onClick={() => dispatch(addSection())} style={{ cursor: "pointer" }}>
        <IoMdAdd />
        <h4>Add Section</h4>
      </div>
    </div>
  );
};

export default CreateTestLeft;