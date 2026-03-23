// store/slices/testSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  testName: "My Assessment Test",
  selectedSectionId: null,
  sections: [
    {
      id: "1",
      sectionName: "Technical Round",
      timeLimit: 30,
      isShuffle: true,
      isTimeLimit: true,
      sectionTopics: [],
    },
  ],
};

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setSelectedSection: (state, action) => {
      state.selectedSectionId = action.payload;
    },
    addSection: (state) => {
      const newId = Date.now().toString();
      state.sections.push({
        id: newId,
        sectionName: `Section ${state.sections.length + 1}`,
        timeLimit: 30,
        isShuffle: false,
        isTimeLimit: false,
        sectionTopics: [],
      });
      state.selectedSectionId = newId;
      toast.success("New section added!");
    },
    deleteSection: (state, action) => {
      const id = action.payload;
      state.sections = state.sections.filter((s) => s.id !== id);
      if (state.selectedSectionId === id) {
        state.selectedSectionId = state.sections[0]?.id || null;
      }
    },
    updateSection: (state, action) => {
      const { sectionId, sectionName, timeLimit, isShuffle, isTimeLimit } = action.payload;
      const section = state.sections.find((s) => s.id === sectionId);
      if (section) {
        section.sectionName = sectionName || section.sectionName;
        section.timeLimit = timeLimit ?? section.timeLimit;
        section.isShuffle = isShuffle ?? section.isShuffle;
        section.isTimeLimit = isTimeLimit ?? section.isTimeLimit;
      }
    },
    reorderSections: (state, action) => {
      const { sourceId, destinationId } = action.payload;
      const sourceIndex = state.sections.findIndex((s) => s.id === sourceId);
      const destIndex = state.sections.findIndex((s) => s.id === destinationId);
      const [moved] = state.sections.splice(sourceIndex, 1);
      state.sections.splice(destIndex, 0, moved);
    },
   addTopicToSection: (state, action) => {
      const { topicId, topicName, easy, medium, hard, questionCount } = action.payload;
      const section = state.sections.find((s) => s.id === state.selectedSectionId);

      if (!section) {
        toast.error("Please select a section first!");
        return;
      }

      const alreadyExists = section.sectionTopics.some((t) => t.topicId === topicId);
      if (alreadyExists) {
        toast.warning(`${topicName} is already added!`);
        return;
      }

      section.sectionTopics.push({
        uniqueId: `${topicId}-${Date.now()}`,
        topicId,
        topicName,
        easy: easy || 0,
        medium: medium || 0,
        hard: hard || 0,
        total: questionCount || easy + medium + hard,
      });

      toast.success(`${topicName} added!`);
    },

    // NEW ACTION: Update difficulty of existing topic
    updateTopicDifficulty: (state, action) => {
      const { sectionId, uniqueId, easy, medium, hard, total } = action.payload;
      const section = state.sections.find(s => s.id === sectionId);
      if (section) {
        const topic = section.sectionTopics.find(t => t.uniqueId === uniqueId);
        if (topic) {
          topic.easy = easy;
          topic.medium = medium;
          topic.hard = hard;
          topic.total = total || easy + medium + hard;
        }
      }
    },
    removeTopicFromSection: (state, action) => {
      const { sectionId, uniqueId } = action.payload;
      const section = state.sections.find((s) => s.id === sectionId);
      if (section) {
        section.sectionTopics = section.sectionTopics.filter((t) => t.uniqueId !== uniqueId);
      }
    },
  },
});

export const {
  setSelectedSection,
  addSection,
  deleteSection,
  updateSection,
  reorderSections,
  addTopicToSection,
  removeTopicFromSection,
  updateTopicDifficulty,
} = testSlice.actions;

export default testSlice.reducer;