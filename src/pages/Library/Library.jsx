import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Box } from '@mui/material'
import LibraryHeader from '../../PageInnerComponent/Library/LibraryHeader'
import LibraryBody from '../../PageInnerComponent/Library/LibraryBody'
import '../../PageInnerComponent/Library/Library.css'

const Library = () => {

    const [activeTab, setActiveTab] = useState("MCQs");

    const [selectedTopics, setSelectedTopics] = useState([]);
    const [selectedDifficulties, setSelectedDifficulties] = useState([]);



    const handleAddTopic = (topic) => {
        setSelectedTopics((prev) =>
            prev.some((t) => t.topic_name === topic)
                ? prev
                : [...prev, { id: Date.now(), topic_name: topic }]
        );
    };

    const handleAddDifficulty = (level) => {
        setSelectedDifficulties((prev) =>
            prev.includes(level) ? prev : [...prev, level]
        );
    };

    const addTopicChip = (topic) => {
        setSelectedTopics((prev) =>
            prev.some((t) => t.topic_name === topic)
                ? prev
                : [...prev, { id: Date.now(), topic_name: topic }]
        );
    };

    const removeTopicChip = (topicName) => {
        setSelectedTopics((prev) =>
            prev.filter((t) => t.topic_name !== topicName)
        );
    };

    const addDifficultyChip = (level) => {
        setSelectedDifficulties((prev) =>
            prev.includes(level) ? prev : [...prev, level]
        );
    };

    const removeDifficultyChip = (level) => {
        setSelectedDifficulties((prev) =>
            prev.filter((d) => d !== level)
        );
    };


    return (
        <Box sx={{ display: "flex" }}>
            <Sidebar />

            <Box sx={{ flexGrow: 1 }}>
                <Navbar />

                <Box component="main" sx={{ p: 3 }}>
                    <LibraryHeader
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        onAddTopic={handleAddTopic}
                        onAddDifficulty={handleAddDifficulty}
                    />
                    <LibraryBody
                        activeTab={activeTab}
                        selectedTopics={selectedTopics}
                        selectedDifficulties={selectedDifficulties}
                        addTopicChip={addTopicChip}
                        removeTopicChip={removeTopicChip}
                        addDifficultyChip={addDifficultyChip}
                        removeDifficultyChip={removeDifficultyChip}
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Library
