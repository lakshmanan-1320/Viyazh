// import React, { useState } from "react";
// import {
//   Box,
//   Tabs,
//   Tab,
//   Typography,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
//   Collapse,
//   TextField,
//   InputAdornment
// } from "@mui/material";
// import { ArrowRight, ExpandMore, Add, Search } from "@mui/icons-material";

// const CreateTestRight = ({ selectedSectionId }) => {
//   const [selectedMainTab, setSelectedMainTab] = useState(0);
//   const [selectedTab, setSelectedTab] = useState(0);
//   const [openList, setOpenList] = useState("");
//   const [sectionName, setSearch] = useState("");
//   const [languageName, setLanguage] = useState("");
//   const [selectedLanguage, setSelectedLanguage] = useState(null);

//   // ---------- FIXED handleToggle (Only 1 function) ----------
//   const handleToggle = (lang) => {
//     setSelectedLanguage(lang);
//     setOpenList((prev) => (prev === lang ? "" : lang));
//   };

//   // ---------------------- DUMMY DATA ------------------------
//   const dummyLanguages = [
//     {
//       language_name: "Web Development",
//       Topics: [
//         { id: 1, topic_name: "JavaScript", questionCount: 45, easy: 20, medium: 15, hard: 10 },
//         { id: 2, topic_name: "React", questionCount: 28, easy: 10, medium: 12, hard: 6 },
//         { id: 3, topic_name: "Node.js", questionCount: 16, easy: 5, medium: 8, hard: 3 },
//       ],
//     },
//     {
//       language_name: "Programming",
//       Topics: [
//         { id: 4, topic_name: "C++", questionCount: 40, easy: 18, medium: 15, hard: 7 },
//         { id: 5, topic_name: "Java", questionCount: 39, easy: 12, medium: 17, hard: 10 },
//       ],
//     },
//     {
//       language_name: "Data Science",
//       Topics: [
//         { id: 6, topic_name: "Python", questionCount: 52, easy: 20, medium: 22, hard: 10 },
//         { id: 7, topic_name: "ML Basics", questionCount: 30, easy: 12, medium: 10, hard: 8 },
//       ],
//     },
//   ];

//   const dummySavedSections = [
//     { id: 101, sectionName: "Frontend Essentials" },
//     { id: 102, sectionName: "Backend Mastery" },
//     { id: 103, sectionName: "Data Structures Pack" },
//     { id: 104, sectionName: "Full Stack Challenge" },
//   ];
//   // -----------------------------------------------------------

//   const handleMainTabChange = (event, newValue) => setSelectedMainTab(newValue);
//   const handleTabChange = (event, newValue) => setSelectedTab(newValue);

//   const handleAddTopic = (topicId, topicName) => {
//     console.log("Added Topic: ", topicId, topicName);
//   };

//   const handleSearchChange = (e) => setSearch(e.target.value);
//   const handleSearchLangChange = (e) => setLanguage(e.target.value);

//   // Filter dummy data
//   const filteredLanguages = dummyLanguages.filter((lang) =>
//     lang.language_name.toLowerCase().includes(languageName.toLowerCase())
//   );

//   const filteredSections = dummySavedSections.filter((sec) =>
//     sec.sectionName.toLowerCase().includes(sectionName.toLowerCase())
//   );

//   return (
//     <Box sx={{ padding: "32px 30px 0px 30px" }} className="createTestRight_tab">

//       {/* Main Tabs */}
//       <Tabs
//         value={selectedMainTab}
//         onChange={handleMainTabChange}
//         className="top_main_tab"
//         sx={{ "& .MuiTabs-indicator": { display: "none" } }}
//       >
//         <Tab label="All" className={selectedMainTab === 0 ? "main-tab-active" : "main-tab"} />
//         <Tab label="My" className={selectedMainTab === 1 ? "main-tab-active" : "main-tab"} />
//       </Tabs>

//       {/* All Tab */}
//       {selectedMainTab === 0 && (
//         <>
//           {/* Search Field */}
//           <Box>
//             <TextField
//               fullWidth
//               variant="outlined"
//               placeholder="Search"
//               value={languageName}
//               onChange={handleSearchLangChange}
//               className="mcq-search-field"
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Search sx={{ color: "#323232" }} />
//                   </InputAdornment>
//                 ),
//               }}
//               sx={{ marginBottom: 2 }}
//             />
//           </Box>

//           {/* MCQ / Coding */}
//           <Tabs
//             value={selectedTab}
//             onChange={handleTabChange}
//             className="sub_main_tab"
//             sx={{ "& .MuiTabs-indicator": { display: "none" } }}
//           >
//             <Tab label="MCQ" className={selectedTab === 0 ? "sub-tab-active" : "sub-tab"} />
//             <Tab label="Coding" className={selectedTab === 1 ? "sub-tab-active" : "sub-tab"} />
//           </Tabs>

//           {/* MCQ List */}
//           {selectedTab === 0 && (
//             <List>
//               {filteredLanguages.length ? (
//                 filteredLanguages.map((item, index) => (
//                   <Box key={index}>
//                     <ListItem
//                       button
//                       className="mcq-list-item"
//                       onClick={() => handleToggle(item.language_name)}
//                       sx={{
//                         background:
//                           selectedLanguage === item.language_name
//                             ? "linear-gradient(271.38deg, rgba(163, 29, 229, 0.12) 1.17%, rgba(113, 88, 226, 0.12) 70.13%)"
//                             : "#fff",
//                             color:
//                           selectedLanguage === item.language_name?"#A31DE5":"#000",
//                         borderRadius: "16px",
//                         transition: "0.3s",
//                         fontFamily: "Inter !important",
//                         fontWeight: 800,
                  
//                         fontSize: "14px",
//                         lineHeight: "20px",
//                         letterSpacing: "0%",
//                         "&:hover": {
//                           background: "#F0F7FF",
//                         },
//                       }}
//                     >

//                       {openList === item.language_name ? <ExpandMore /> : <ArrowRight />}
//                       <ListItemText primary={item.language_name} sx={{ marginLeft: 2 }} />
//                     </ListItem>

//                     <Collapse in={openList === item.language_name}>
//                       <List disablePadding sx={{ paddingLeft: "40px" }}>
//                         {item.Topics.map((topic) => (
//                           <ListItem key={topic.id}>
//                             <ListItemText primary={topic.topic_name} />
//                             <IconButton onClick={() => handleAddTopic(topic.id, topic.topic_name)}>
//                               <Add />
//                             </IconButton>
//                           </ListItem>
//                         ))}
//                       </List>
//                     </Collapse>
//                   </Box>
//           ))
//           ) : (
//           <Typography sx={{ textAlign: "center", marginTop: 2 }}>
//             No languages found
//           </Typography>
//               )}
//         </List>
//           )}

//       {/* Coding */}
//       {selectedTab === 1 && (
//         <List>
//           {["Easy", "Medium", "Hard"].map((level) => (
//             <ListItem key={level}>
//               <ListItemText primary={level} />
//               <IconButton>
//                 <Add />
//               </IconButton>
//             </ListItem>
//           ))}
//         </List>
//       )}
//     </>
//   )
// }

// {/* My Tab */ }
// {
//   selectedMainTab === 1 && (
//     <>
//       {/* Search */}
//       <TextField
//         fullWidth
//         variant="outlined"
//         placeholder="Search"
//         value={sectionName}
//         onChange={handleSearchChange}
//         className="mcq-search-field"
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <Search sx={{ color: "#323232" }} />
//             </InputAdornment>
//           ),
//         }}
//         sx={{ marginBottom: 2 }}
//       />

//       {/* Saved Sections */}
//       <List>
//         {filteredSections.length ? (
//           filteredSections.map((item) => (
//             <ListItem key={item.id}>
//               <ListItemText
//                 primary={item.sectionName}
//                 sx={{
//                   "& .MuiTypography-root": {
//                     fontSize: "16px",
//                     fontWeight: 500,
//                   },
//                 }}
//               />
//               <IconButton>
//                 <Add />
//               </IconButton>
//             </ListItem>
//           ))
//         ) : (
//           <Typography sx={{ textAlign: "center", marginTop: 2 }}>
//             No sections available
//           </Typography>
//         )}
//       </List>
//     </>
//   )
// }
//     </Box >
//   );
// };

// export default CreateTestRight;

// components/CreateTestRight.jsx
import React, { useState } from "react";
import {
  Box,
  Tabs,
  Tab,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Collapse,
  TextField,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Slider,
  Stack,
} from "@mui/material";
import { ArrowRight, ExpandMore, Add, Search, Close } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addTopicToSection } from "../../store/Slices/testSlice";
import { toast } from "react-toastify";

const CreateTestRight = () => {
  const [selectedMainTab, setSelectedMainTab] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const [openList, setOpenList] = useState("");
  const [languageName, setLanguageName] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Modal state for difficulty picker
  const [openDifficultyModal, setOpenDifficultyModal] = useState(false);
  const [currentTopic, setCurrentTopic] = useState(null);
  const [easyCount, setEasyCount] = useState(0);
  const [mediumCount, setMediumCount] = useState(0);
  const [hardCount, setHardCount] = useState(0);

  const dispatch = useDispatch();
  const selectedSectionId = useSelector((state) => state.test.selectedSectionId);

  const handleToggle = (lang) => {
    setSelectedLanguage(lang);
    setOpenList((prev) => (prev === lang ? "" : lang));
  };

  const openAddModal = (topic) => {
    setCurrentTopic(topic);
    setEasyCount(0);
    setMediumCount(0);
    setHardCount(0);
    setOpenDifficultyModal(true);
  };

  const handleAddWithDifficulty = () => {
    if (!selectedSectionId) {
      toast.error("Please select a section first!");
      return;
    }

    const totalSelected = easyCount + mediumCount + hardCount;
    if (totalSelected === 0) {
      toast.warning("Please select at least one question");
      return;
    }

    dispatch(
      addTopicToSection({
        topicId: currentTopic.id,
        topicName: currentTopic.topic_name,
        questionCount: totalSelected,
        easy: easyCount,
        medium: mediumCount,
        hard: hardCount,
      })
    );

    toast.success(`${currentTopic.topic_name}: ${totalSelected} questions added!`);
    setOpenDifficultyModal(false);
  };

  // ---------------------- DUMMY DATA ------------------------
  const dummyLanguages = [
    {
      language_name: "Web Development",
      Topics: [
        { id: 1, topic_name: "JavaScript", questionCount: 45, easy: 20, medium: 15, hard: 10 },
        { id: 2, topic_name: "React", questionCount: 28, easy: 10, medium: 12, hard: 6 },
        { id: 3, topic_name: "Node.js", questionCount: 16, easy: 5, medium: 8, hard: 3 },
      ],
    },
    {
      language_name: "Programming",
      Topics: [
        { id: 4, topic_name: "C++", questionCount: 40, easy: 18, medium: 15, hard: 7 },
        { id: 5, topic_name: "Java", questionCount: 39, easy: 12, medium: 17, hard: 10 },
      ],
    },
    {
      language_name: "Data Science",
      Topics: [
        { id: 6, topic_name: "Python", questionCount: 52, easy: 20, medium: 22, hard: 10 },
        { id: 7, topic_name: "ML Basics", questionCount: 30, easy: 12, medium: 10, hard: 8 },
      ],
    },
  ];

  const dummySavedSections = [
    { id: 101, sectionName: "Frontend Essentials" },
    { id: 102, sectionName: "Backend Mastery" },
    { id: 103, sectionName: "Data Structures Pack" },
    { id: 104, sectionName: "Full Stack Challenge" },
  ];

  const filteredLanguages = dummyLanguages.filter((lang) =>
    lang.language_name.toLowerCase().includes(languageName.toLowerCase()) ||
    lang.Topics.some(t => t.topic_name.toLowerCase().includes(languageName.toLowerCase()))
  );

  const filteredSections = dummySavedSections.filter((sec) =>
    sec.sectionName.toLowerCase().includes(languageName.toLowerCase())
  );

  return (
    <>
      <Box sx={{ padding: "32px 30px 0px 30px" }} className="createTestRight_tab">
        {/* Main Tabs */}
        <Tabs
          value={selectedMainTab}
          onChange={(e, v) => setSelectedMainTab(v)}
          className="top_main_tab"
          sx={{ "& .MuiTabs-indicator": { display: "none" } }}
        >
          <Tab label="All" className={selectedMainTab === 0 ? "main-tab-active" : "main-tab"} />
          <Tab label="My" className={selectedMainTab === 1 ? "main-tab-active" : "main-tab"} />
        </Tabs>

        {selectedMainTab === 0 && (
          <>
            <Box>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Search"
                value={languageName}
                onChange={(e) => setLanguageName(e.target.value)}
                className="mcq-search-field"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: "#323232" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ marginBottom: 2 }}
              />
            </Box>

            <Tabs
              value={selectedTab}
              onChange={(e, v) => setSelectedTab(v)}
              className="sub_main_tab"
              sx={{ "& .MuiTabs-indicator": { display: "none" } }}
            >
              <Tab label="MCQ" className={selectedTab === 0 ? "sub-tab-active" : "sub-tab"} />
              <Tab label="Coding" className={selectedTab === 1 ? "sub-tab-active" : "sub-tab"} />
            </Tabs>

            {selectedTab === 0 && (
              <List>
                {filteredLanguages.length ? (
                  filteredLanguages.map((item) => (
                    <Box key={item.language_name}>
                      <ListItem
                        button
                        className="mcq-list-item"
                        onClick={() => handleToggle(item.language_name)}
                        sx={{
                          background:
                            selectedLanguage === item.language_name
                              ? "linear-gradient(271.38deg, rgba(163, 29, 229, 0.12) 1.17%, rgba(113, 88, 226, 0.12) 70.13%)"
                              : "#fff",
                          color: selectedLanguage === item.language_name ? "#A31DE5" : "#000",
                          borderRadius: "16px",
                          transition: "0.3s",
                          fontFamily: "Inter !important",
                          fontWeight: 800,
                          fontSize: "14px",
                          lineHeight: "20px",
                          letterSpacing: "0%",
                          "&:hover": { background: "#F0F7FF" },
                        }}
                      >
                        {openList === item.language_name ? <ExpandMore /> : <ArrowRight />}
                        <ListItemText primary={item.language_name} sx={{ marginLeft: 2 }} />
                      </ListItem>

                      <Collapse in={openList === item.language_name}>
                        <List disablePadding sx={{ paddingLeft: "40px" }}>
                          {item.Topics.map((topic) => (
                            <ListItem key={topic.id}>
                              <ListItemText
                                primary={topic.topic_name}
                                secondary={`${topic.questionCount} questions available`}
                                primaryTypographyProps={{ fontSize: "14px" }}
                              />
                              <IconButton
                                onClick={() => openAddModal(topic)}
                                sx={{ color: "#A31DE5" }}
                              >
                                <Add />
                              </IconButton>
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </Box>
                  ))
                ) : (
                  <Typography sx={{ textAlign: "center", marginTop: 2 }}>
                    No languages found
                  </Typography>
                )}
              </List>
            )}

            {selectedTab === 1 && (
              <List>
                {["Easy", "Medium", "Hard"].map((level) => (
                  <ListItem key={level}>
                    <ListItemText primary={level} />
                    <IconButton><Add /></IconButton>
                  </ListItem>
                ))}
              </List>
            )}
          </>
        )}

        {selectedMainTab === 1 && (
          <>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search"
              value={languageName}
              onChange={(e) => setLanguageName(e.target.value)}
              className="mcq-search-field"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search sx={{ color: "#323232" }} />
                  </InputAdornment>
                ),
              }}
              sx={{ marginBottom: 2 }}
            />

            <List>
              {filteredSections.length ? (
                filteredSections.map((item) => (
                  <ListItem key={item.id}>
                    <ListItemText
                      primary={item.sectionName}
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "16px",
                          fontWeight: 500,
                        },
                      }}
                    />
                    <IconButton><Add /></IconButton>
                  </ListItem>
                ))
              ) : (
                <Typography sx={{ textAlign: "center", marginTop: 2 }}>
                  No sections available
                </Typography>
              )}
            </List>
          </>
        )}
      </Box>

      {/* YOUR NEW DIFFICULTY PICKER MODAL */}
      <Dialog
        open={openDifficultyModal}
        onClose={() => setOpenDifficultyModal(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.15)",
            bgcolor: "#F8F6FF"
          },
        }}
        className="difficulty_picker"
      >
        <DialogTitle
          sx={{
            background: "linear-gradient(135deg, #A31DE5 0%, #7158E2 100%)",
            color: "white",
            fontWeight: 700,
            fontSize: "20px",
            textAlign: "center",
            py: 2.5,
            position: "relative",
          }}
        >
          Add Questions from "{currentTopic?.topic_name}"
          <IconButton
            sx={{ position: "absolute", right: 12, top: 12, color: "white" }}
            onClick={() => setOpenDifficultyModal(false)}
          >
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ mt: 2, px: 4, pb: 1 }}>
          <Stack spacing={4}>
            <Box
              sx={{
                p: 2.5,
                borderRadius: "14px",
                bgcolor: "white",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.07)"
              }}
            >
              <Typography fontWeight={700} color="#4CAF50">
                Easy ({easyCount} / {currentTopic?.easy})
              </Typography>
              <Slider
                value={easyCount}
                onChange={(_, v) => setEasyCount(v)}
                max={currentTopic?.easy || 0}
                valueLabelDisplay="auto"
                sx={{ color: "#4CAF50", mt: 1 }}
              />
            </Box>
            <Box
              sx={{
                p: 2.5,
                borderRadius: "14px",
                bgcolor: "white",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.07)"
              }}
            >
              <Typography fontWeight={700} color="#FF9800">
                Medium ({mediumCount} / {currentTopic?.medium})
              </Typography>
              <Slider
                value={mediumCount}
                onChange={(_, v) => setMediumCount(v)}
                max={currentTopic?.medium || 0}
                valueLabelDisplay="auto"
                sx={{ color: "#FF9800", mt: 1 }}
              />
            </Box>
            <Box
              sx={{
                p: 2.5,
                borderRadius: "14px",
                bgcolor: "white",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.07)"
              }}
            >
              <Typography fontWeight={700} color="#F44336">
                Hard ({hardCount} / {currentTopic?.hard})
              </Typography>
              <Slider
                value={hardCount}
                onChange={(_, v) => setHardCount(v)}
                max={currentTopic?.hard || 0}
                valueLabelDisplay="auto"
                sx={{ color: "#F44336", mt: 1 }}
              />
            </Box>
            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  color: "#A31DE5",
                  fontSize: "22px",
                }}
              >
                Total Questions: {easyCount + mediumCount + hardCount}
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ p: 3, justifyContent: "center", gap: 2 }}>
          <Button
            onClick={() => setOpenDifficultyModal(false)}
            sx={{
              background: "#E4D7F6",
              color: "#6B21A8",
              fontWeight: 600,
              px: 3,
              borderRadius: "10px",
              "&:hover": { background: "#D8C7F2" }
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleAddWithDifficulty}
            sx={{
              background: "linear-gradient(135deg, #A31DE5 0%, #7158E2 100%)",
              fontWeight: 600,
              px: 3,
              borderRadius: "10px",
              "&:hover": { background: "linear-gradient(135deg, #8D1BC6, #634FD4)" }
            }}
          >
            Add to Section
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateTestRight;