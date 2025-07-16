import { useState } from "react";

function Courses() {
    const academicYears = {
        "Freshman Year": [
            {
                semester: "Fall 2018",
                courses: [
                    "CIS 120    Programming Languages & Techniques I",
                    "CIS 160    Mathematical Foundations of Computer Science",
                    "ECON 001    Engineering Ethics",
                    "KORN 011    Elementary Korean 1",
                    "PERS 017    Persian for Heritage Speakers I"
                ],
            },
            {
                semester: "Spring 2019",
                courses: [
                    "CIS 121    Programming Languages & Techniques II",
                    "EAS 203    Engineering Ethics",
                    "MATH 114    Calculus II",
                    "PERS 018    Persian for Heritage Speakers II",
                    "WRIT 028    Writing Seminar: Marketing of Likes"
                ],
            },
        ],
        "Sophomore Year": [
            {
                semester: "Fall 2019",
                courses: [
                    "BIBB 334    Computational Neuroscience Lab",
                    "CIS 240    Intro to Computer Systems",
                    "CIS 262    Automata, Computability, & Complexity",
                    "NETS 112    Networked Life",
                    "PERS 615    Advanced Persian I"
                ],
            },
            {
                semester: "Spring 2020",
                courses: [
                    "CIS 195    Mobile (iOS) App Development",
                    "CIS 350    Software Design & Engineering",
                    "CIS 502    Analysis of Algorithms",
                    "ESE 544    Project Management",
                    "MATH 240    Calculus III",
                    "STAT 430    Probability"
                ],
            },
        ],
        "Junior Year": [
            {
                semester: "Fall 2020",
                courses: [
                    "CIS 380    Operating Systems",
                    "CIS 521    Artificial Intelligence",
                    "CIS 545    Big Data Analytics",
                    "EAS 545    Engineering Entrepreneurship I",
                    "ESE 542    Statistics for Data Science",
                    "MGMT 291    Negotiations"
                ],
            },
            {
                semester: "Spring 2021",
                courses: [
                    "CIS 530    Computational Linguistics",
                    "CIS 571    Computer Organization & Design",
                    "EAS 512    Engineering Negotiation",
                    "ESE 190    Silicon Garage",
                    "FNCE 206    Financial Derivatives",
                    "MATH 513    Computational Linear Algebra",
                    "STAT 476    Applied Probability Models in Marketing"
                ],
            },
        ],
        "Senior Year": [
            {
                semester: "Fall 2021",
                courses: [
                    "CIS 400    Senior Project",
                    "CIS 520    Machine Learning",
                    "CIS 556    Cryptography",
                    "CIS 677    Randomized Algorithms",
                    "MUSC 005    College Music Program",
                    "REAL 209    Real Estate Investments"
                ],
            },
            {
                semester: "Spring 2022",
                courses: [
                    "CIS 401    Senior Project II",
                    "EAS 549    Engineering Entrepreneurship Lab",
                    "MUSC 005    College Music Program",
                ],
            },
        ],
    };

    const Semester = ({ semester, courses }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="mb-4">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full text-left text-md font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 px-3 py-2 rounded text-gray-800 dark:text-gray-100 transition"
                >
                    {semester} {isOpen ? "▲" : "▼"}
                </button>
                {isOpen && (
                    <div className="ml-4 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                        {courses.map((course, i) => (
                            <div key={i}>{course}</div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <section id="courses" className="w-full bg-white dark:bg-gray-900 py-6">
            <div className="w-full px-4 md:px-10 lg:px-16 xl:px-24">
                <h1 className="text-3xl font-semibold mb-10 text-center text-gray-900 dark:text-white">
                    Courses by Academic Year
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {Object.entries(academicYears).map(([year, semesters]) => (
                        <div key={year}>
                            <h2 className="text-xl font-bold mb-4 w-full text-center text-gray-800 dark:text-gray-200">
                                {year}
                            </h2>
                            {semesters.map((entry, idx) => (
                                <Semester key={idx} semester={entry.semester} courses={entry.courses} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Courses;
