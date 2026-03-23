import React, { useState } from "react";
import {
  Box,
  Typography,
  Pagination,
  Stack,
  Chip,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import { FiPlus } from "react-icons/fi";

/* ===== DUMMY DATA ===== */
const mcqQuestions = [
  {
    id: 1,
    question: "What is React?",
    difficulty: "Easy",
    language: "React",
    points: 2,
    options: ["Library", "Framework", "Language", "Tool"]
  },
  {
    id: 2,
    question: "What is JSX?",
    difficulty: "Medium",
    language: "JavaScript",
    points: 3,
    options: ["JS XML", "Template", "Library", "Compiler"]
  }
];

const codingQuestions = [
  {
    id: 1,
    title: "Add two numbers",
    difficulty: "Easy",
    language: "Java",
    points: 5
  },
  {
    id: 2,
    title: "Binary Search",
    difficulty: "Hard",
    language: "Python",
    points: 8
  }
];

const LibraryBody = ({
  activeTab,
  selectedTopics,
  selectedDifficulties,
  addTopicChip,
  removeTopicChip,
  addDifficultyChip,
  removeDifficultyChip
}) => {
  /* ===== POPUP ===== */
  const [showPopup, setShowPopup] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  /* ===== MULTI-SELECT LANGUAGES ===== */
  const [mcqLanguages, setMcqLanguages] = useState([]);
  const [codingLanguages, setCodingLanguages] = useState([]);

  /* ===== VIEW ===== */
  const handleView = (question) => {
    setSelectedQuestion(question);
    setShowPopup(true);
  };

  /* ===== DIFFICULTY TOGGLE ===== */
  const handleDifficultyToggle = (level) => {
    selectedDifficulties.includes(level)
      ? removeDifficultyChip(level)
      : addDifficultyChip(level);
  };

  /* ===== FILTERED DATA ===== */
  const filteredMcqs = mcqQuestions.filter(
    (q) =>
      (mcqLanguages.length === 0 || mcqLanguages.includes(q.language)) &&
      (selectedDifficulties.length === 0 ||
        selectedDifficulties.includes(q.difficulty))
  );

  const filteredCoding = codingQuestions.filter(
    (q) =>
      (codingLanguages.length === 0 ||
        codingLanguages.includes(q.language)) &&
      (selectedDifficulties.length === 0 ||
        selectedDifficulties.includes(q.difficulty))
  );

  return (
    <Box className="bg-color" sx={{ padding: "0 25px" }}>

      {/* ===== FILTER CHIPS ===== */}
      <div className="filter-tags" style={{ marginTop: "20px" }}>
        {selectedTopics.map((topic) => (
          <Chip
            key={topic.id}
            label={topic.topic_name}
            className="filter-tag"
            sx={{ backgroundColor: "#A31DE5", color: "#fff" }}
            onDelete={() => {
              // remove chip
              removeTopicChip(topic.topic_name);

              // sync dropdowns
              setMcqLanguages((prev) =>
                prev.filter((lang) => lang !== topic.topic_name)
              );
              setCodingLanguages((prev) =>
                prev.filter((lang) => lang !== topic.topic_name)
              );
            }}
          />
        ))}

        {selectedDifficulties.map((level) => (
          <Chip
            key={level}
            label={level}
            className="filter-tag"
            sx={{ backgroundColor: "#A31DE5", color: "#fff" }}
            onDelete={() => removeDifficultyChip(level)}
          />
        ))}
      </div>

      {/* ================= MCQS ================= */}
      {activeTab === "MCQs" && (
        <>
          <div className="d-flex-toggle">
            {/* MCQ LANGUAGE MULTI SELECT */}
            <FormControl sx={{ width: 280 }}>
              <InputLabel>Language</InputLabel>
              <Select
                multiple
                value={mcqLanguages}
                label="Language"
                onChange={(e) => {
                  const values = e.target.value;
                  setMcqLanguages(values);
                  values.forEach(addTopicChip);
                }}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        size="small"
                        sx={{ backgroundColor: "#A31DE5", color: "#fff" }}
                      />
                    ))}
                  </Box>
                )}
              >
                {["React", "JavaScript", "HTML"].map((lang) => (
                  <MenuItem key={lang} value={lang}>
                    <input
                      type="checkbox"
                      checked={mcqLanguages.includes(lang)}
                      readOnly
                      style={{ accentColor: "#A31DE5", marginRight: 8 }}
                    />
                    {lang}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* DIFFICULTY TOGGLES */}
            <div className="toggle-three">
              {["Easy", "Medium", "Hard"].map((level) => (
                <Box className="toggle-inner" key={level}>
                  <Typography className="toggle-text">{level}</Typography>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={selectedDifficulties.includes(level)}
                      onChange={() => handleDifficultyToggle(level)}
                      style={{ accentColor: "#A31DE5" }}
                    />
                    <span className="slider"></span>
                  </label>
                </Box>
              ))}
            </div>
          </div>

          <hr />

          <div className="question-list">
            {filteredMcqs.map((q) => (
              <div className="question-item" key={q.id}>
                <div>
                  <p className="qus-lib">{q.question}</p>
                  <div className="question-tags">
                    <span className="question-tag">{q.language}</span>
                    <span className="question-tag">{q.difficulty}</span>
                    <span className="question-tag">{q.points} points</span>
                  </div>
                </div>
                <button className="view-button" onClick={() => handleView(q)}>
                  View
                </button>
              </div>
            ))}
          </div>

          <Stack alignItems="center" sx={{ mt: 3 }}>
            <Pagination count={3} />
          </Stack>
        </>
      )}

      {/* ================= CODING ================= */}
      {activeTab === "Coding" && (
        <>
          <div className="d-flex-toggle">
            {/* CODING LANGUAGE MULTI SELECT */}
            <FormControl sx={{ width: 280 }}>
              <InputLabel>Language</InputLabel>
              <Select
                multiple
                value={codingLanguages}
                label="Language"
                onChange={(e) => {
                  const values = e.target.value;
                  setCodingLanguages(values);
                  values.forEach(addTopicChip);
                }}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        size="small"
                        sx={{ backgroundColor: "#A31DE5", color: "#fff" }}
                      />
                    ))}
                  </Box>
                )}
              >
                {["Java", "Python"].map((lang) => (
                  <MenuItem key={lang} value={lang}>
                    <input
                      type="checkbox"
                      checked={codingLanguages.includes(lang)}
                      readOnly
                      style={{ accentColor: "#A31DE5", marginRight: 8 }}
                    />
                    {lang}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* DIFFICULTY TOGGLES */}
            <div className="toggle-three">
              {["Easy", "Medium", "Hard"].map((level) => (
                <Box className="toggle-inner" key={level}>
                  <Typography className="toggle-text">{level}</Typography>
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={selectedDifficulties.includes(level)}
                      onChange={() => handleDifficultyToggle(level)}
                      style={{ accentColor: "#A31DE5" }}
                    />
                    <span className="slider"></span>
                  </label>
                </Box>
              ))}
            </div>
          </div>

          <hr />

          <div className="question-list">
            {filteredCoding.map((q) => (
              <div className="question-item" key={q.id}>
                <div>
                  <p className="qus-lib">{q.title}</p>
                  <div className="question-tags">
                    <span className="question-tag">{q.language}</span>
                    <span className="question-tag">{q.difficulty}</span>
                    <span className="question-tag">{q.points} points</span>
                  </div>
                </div>
                <button className="view-button" onClick={() => handleView(q)}>
                  View
                </button>
              </div>
            ))}
          </div>

          <Stack alignItems="center" sx={{ mt: 3 }}>
            <Pagination count={2} />
          </Stack>
        </>
      )}

      {/* ================= POPUP ================= */}
      {showPopup && (
        <Box className="popup-code">
          <Box
            className="popup-code-overlay"
            onClick={() => setShowPopup(false)}
          />
          <Box className="popup-code-body">
            <Box className="popup-code-header">
              <Typography className="library-popup-heading">
                Detailed Information
              </Typography>
              <FiPlus
                size={24}
                style={{ transform: "rotate(45deg)", cursor: "pointer" }}
                onClick={() => setShowPopup(false)}
              />
            </Box>

            <Box className="popup-code-content">
              <Typography>
                {selectedQuestion?.question || selectedQuestion?.title}
              </Typography>

              {selectedQuestion?.options && (
                <FormControl className="options">
                  <RadioGroup>
                    {selectedQuestion.options.map((opt, idx) => (
                      <FormControlLabel
                        key={idx}
                        value={opt}
                        control={<Radio />}
                        label={opt}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LibraryBody;
