import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";




const AddTopic = () => {
  const location = useLocation();
  const createdId = location.state?.createdId;

  const navigate = useNavigate();

  const [viewData, setViewData] = useState(null);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      setViewData({
        data: {
          language_name: "English",
          Topics: [
            { id: 1, name: "Grammar", questionsCount: 12 },
            { id: 2, name: "Vocabulary", questionsCount: 8 },
            { id: 3, name: "Comprehension", questionsCount: 15 },
          ],
        },
      });
    }, 500);
  }, []);

  if (!viewData) {
    return <Typography>Loading...</Typography>;
  }

  // Extract dummy data
  const languageName = viewData?.data?.language_name || "-";
  const topicsCount = viewData?.data?.Topics?.length || 0;
  const questionsCount = viewData?.data?.Topics?.reduce(
    (total, topic) => total + (topic.questionsCount || 0),
    0
  );

  const handleAddTopic = () => {
    navigate("/contentCreator/createNewTopic", { state: { createdId } });
  };

  return (
    <Box>
      <Box
        className="create-new-domain"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          padding: "0px 30px",
        }}
      >
        <Link to="/contentCreator/questionBank">
         <MdOutlineCancel />
        </Link>
      </Box>

      <Box className="create-new-domain-inner">
        <Box className="add-que-box">
          <Box className="add-que-box-inner">
            <Typography className="domain_text">{languageName}</Typography>

            <Box className="add-que-right">
              <Box className="add-que-topic-right">
                <Typography className="add-que-topic">{topicsCount}</Typography>
                <Typography className="add-que-topic_bot">Topic</Typography>
              </Box>

              <Box className="add-que-topic-right">
                <Typography className="add-que-topic">{questionsCount}</Typography>
                <Typography className="add-que-topic_bot">Questions</Typography>
              </Box>

              <Box>
                <Link to="/admin/uploadQuestion">
                  <Button className="que-upload-button">Upload</Button>
                </Link>
              </Box>
            </Box>
          </Box>

          <Box className="add-topic-btn-box">
            <Button onClick={handleAddTopic} className="add-topic-btn">
              Add Topics
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AddTopic;
