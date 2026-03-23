import React, { useEffect, useMemo, useState } from "react";
// import "../../Style/Invited.css";
// import "../../Style/Report.css";
import './Report.css'

import {
    Box,
    Button,
    Typography,
    TextField,
    InputAdornment,
} from "@mui/material";

import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

/* ---------- REACT ICONS ---------- */
import { RiDownloadLine } from "react-icons/ri";
import { FiSearch, FiFilter } from "react-icons/fi";
import { BsCheckCircleFill } from "react-icons/bs";
import { FcCancel } from "react-icons/fc";
import { HiOutlineDocumentReport } from "react-icons/hi";

import CustomReportTable from "./CustomReportTable";

const Report = () => {
    const { id } = useParams();
    const [search, setSearch] = useState("");

    const [testName, setTestName] = useState("");
    const [assestmentId, setAssestmentId] = useState("");
    const [createDate, setCreateDate] = useState("");
    const [cutOff, setCutOff] = useState(0);
    const [webProtect, setWebProtect] = useState(false);

    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);

    /* ---------------- MOCK DATA ---------------- */
    useEffect(() => {
        setTestName("Frontend Developer Assessment");
        setAssestmentId("ASMT-1023");
        setCreateDate("12-09-2025");
        setCutOff(60);
        setWebProtect(true);

        const mockData = {
            candidatesPoints: [
                {
                    testId: 1,
                    candidateId: 101,
                    name: "John Doe",
                    email: "john@example.com",
                    offTabViolationCount: 0,
                    integrityScore: 95,
                    overallPercentage: 82,
                    status: "qualified",
                    sections: [{ averageScore: 80 }, { averageScore: 85 }],
                },
                {
                    testId: 2,
                    candidateId: 102,
                    name: "Jane Smith",
                    email: "jane@example.com",
                    offTabViolationCount: 2,
                    integrityScore: 60,
                    overallPercentage: 55,
                    status: "disqualified",
                    sections: [{ averageScore: 50 }, { averageScore: 60 }],
                },
            ],
        };

        const maxSections = Math.max(
            ...mockData.candidatesPoints.map((c) => c.sections.length)
        );

        const dynamicSectionColumns = Array.from(
            { length: maxSections },
            (_, i) => ({
                field: `section${i + 1}`,
                headerName: `Section ${i + 1}`,
                flex: 1,
                minWidth: 120,
                headerAlign: "center",
                renderCell: (params) => `${params.row[`section${i + 1}`] || 0}%`,
            })
        );

        const staticColumns = [
            { field: "sno", headerName: "S.No", minWidth: 80, headerAlign: "center" },
            {
                field: "candidateName",
                headerName: "Candidate Name",
                minWidth: 150,
                headerAlign: "center",
            },
            {
                field: "email",
                headerName: "Email",
                minWidth: 200,
                headerAlign: "center",
            },
            {
                field: "offTabViolation",
                headerName: "Off Tab Violation",
                minWidth: 150,
                headerAlign: "center",
            },
            {
                field: "integrityScore",
                headerName: "Integrity Score",
                minWidth: 150,
                headerAlign: "center",
            },
            ...dynamicSectionColumns,
            {
                field: "result",
                headerName: "Result",
                minWidth: 150,
                headerAlign: "center",
                renderCell: (params) => (
                    <Box textAlign="center">
                        <Typography>{params.row.result}%</Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                color:
                                    params.row.status === "disqualified"
                                        ? "red"
                                        : "#7158E2",
                            }}
                        >
                            {params.row.status === "disqualified"
                                ? "Not Qualified"
                                : "Qualified"}
                        </Typography>
                    </Box>
                ),
            },
            {
                field: "report",
                headerName: "View Report",
                minWidth: 150,
                headerAlign: "center",
                renderCell: (params) => (
                    <Link
                        to="/admin/fullreport"
                        state={{
                            testId: params.row.testId,
                            candidateId: params.row.candidateId,
                        }}
                        style={{ textDecoration: "none" }}
                    >
                        <Box textAlign="center">
                            <HiOutlineDocumentReport size={22} />
                            <Typography sx={{ fontSize: "10px", fontWeight: 500 }}>
                                View Report
                            </Typography>
                        </Box>
                    </Link>
                ),
            },
        ];

        const mappedRows = mockData.candidatesPoints.map((c, i) => {
            const sectionScores = {};
            c.sections.forEach((s, idx) => {
                sectionScores[`section${idx + 1}`] = s.averageScore.toFixed(1);
            });

            return {
                id: c.testId,
                sno: i + 1,
                candidateName: c.name,
                email: c.email,
                offTabViolation: c.offTabViolationCount,
                integrityScore: c.integrityScore,
                result: Math.round(c.overallPercentage),
                status: c.status,
                testId: c.testId,
                candidateId: c.candidateId,
                ...sectionScores,
            };
        });

        setColumns(staticColumns);
        setRows(mappedRows);
    }, []);

    const filteredRows = useMemo(() => {
        return rows.filter(
            (row) =>
                row.candidateName.toLowerCase().includes(search.toLowerCase()) ||
                row.email.toLowerCase().includes(search.toLowerCase())
        );
    }, [rows, search]);

    const handleDownload = () => {
        toast.success("Report exported successfully");
    };

    return (
        <Box className="invite">
            <Box className="invited_header_cancel">
                <Box className="report_header" sx={{ padding: "0 30px" }}>
                    <Typography className="report_inner_header_text">
                        View Report
                    </Typography>

                    <Box sx={{ display: "flex", gap: "20px" }}>
                        <Button
                            className="report_inner_header_btn"
                            startIcon={<RiDownloadLine size={18} />}
                            onClick={handleDownload}
                        >
                            Export
                        </Button>

                        <Link to="/admin/dashboard">
                            <Button className="report_inner_header_btn">
                                Back to Dashboard
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Box>

            <Box sx={{ padding: "0 25px" }}>
                <Box className="report_area cus-report-area">
                    <Box className="report_area_inner_left cus-report-left">
                        <Typography variant="h6">{testName}</Typography>
                        <Typography>Assessment ID -# {assestmentId}</Typography>
                        <Typography className="report_sin_text">{createDate}</Typography>
                        <Typography className="report_sin_text_2">
                            Qualifying criteria - {cutOff} %
                        </Typography>
                        <Typography className="report_sin_text_2">
                            Proctoring status -
                            {webProtect ? (
                                <span style={{ marginLeft: 6 }}>
                                    <BsCheckCircleFill color="#7158E2" /> Enabled
                                </span>
                            ) : (
                                <span className="report_disabled">
                                    <FcCancel /> Disabled
                                </span>
                            )}
                        </Typography>
                    </Box>

                    <Box className="report_area_inner_right">
                        <TextField
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="test-search-field report-search-field"
                            sx={{
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "12px",          // optional
                                    "& fieldset": {
                                        border: "none",              // ✅ remove default border
                                    },
                                    "&:hover fieldset": {
                                        border: "none",              // ✅ remove hover border
                                    },
                                    "&.Mui-focused fieldset": {
                                        border: "none",              // ✅ remove focus border
                                    },
                                },
                            }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FiSearch />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <FiFilter />
                                    </InputAdornment>
                                ),
                            }}
                        />

                    </Box>

                    <Box className="test_table" sx={{ overflowX: "auto" }}>
                        <CustomReportTable columns={columns} rows={filteredRows} />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Report;
