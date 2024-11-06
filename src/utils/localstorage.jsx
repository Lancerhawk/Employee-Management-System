

const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "firstName": "Rajesh",
        "tasks": [
            {
                "title": "Complete Monthly Report for Q3",
                "description": "You are tasked with preparing the comprehensive monthly report for the third quarter of the fiscal year. This report should cover all departments, providing a detailed breakdown of the activities, accomplishments, and financials. You'll need to incorporate data from various sources, including sales, marketing, finance, and operations. The report should be formatted according to company standards, with charts, graphs, and executive summaries where needed. The deadline is critical, as the report will be presented to senior management on October 5th. Ensure all data is cross-checked for accuracy, and collaborate with department heads if any discrepancies arise. The report should be clear, concise, and informative.",
                "date": "2024-10-05",
                "category": "Reports",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstName": "Anjali",
        "tasks": [
            {
                "title": "Client Follow-Up on Project Requirements",
                "description": "You need to follow up with the client regarding their project requirements. This involves reviewing the initial proposal, ensuring that all necessary requirements have been provided, and clarifying any uncertainties the client might have. You will contact them via email and arrange a meeting if needed to walk through the project scope. Make sure that all the project deliverables, timelines, and expectations are clearly communicated and agreed upon. This is an essential task to ensure the project can move forward smoothly and efficiently.",
                "date": "2024-10-12",
                "category": "Client Management",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 0,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstName": "Priya",
        "tasks": [
            {
                "title": "Code Review for New Feature Release",
                "description": "As part of the upcoming feature release, you are responsible for reviewing the code submitted by the development team. This involves analyzing the code for any potential issues, ensuring it meets coding standards, and checking that it functions as intended. Pay close attention to edge cases, performance, and scalability. Document any issues found and work with the developer responsible for the code to resolve them before merging it into the main branch. You should complete the review by October 15th to ensure enough time for any adjustments.",
                "date": "2024-10-14",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstName": "Amit",
        "tasks": [
            {
                "title": "Submit Timesheet for Last Week",
                "description": "Ensure that the timesheet for the previous week is completed accurately. This task involves reviewing your work hours, ensuring all entries are correct, and making adjustments if necessary. The timesheet must be submitted in accordance with company guidelines, and any discrepancies or missing entries must be addressed immediately. Late submissions or errors may delay payroll processing, so it is critical that this task is completed on time. The timesheet should reflect the full scope of your work for the past week and include all overtime hours worked. Make sure to submit it by the end of the day on October 15th.",
                "date": "2024-10-15",
                "category": "Administration",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
        ],
        "taskNumbers": {
            "active": 0,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstName": "Neha",
        "tasks": [
            {
                "title": "Prepare Presentation for Upcoming Seminar",
                "description": "You are tasked with preparing the slides for the upcoming seminar, which will focus on the latest trends in digital marketing. The presentation should be visually engaging and incorporate the latest data, case studies, and insights relevant to the topic. It’s essential to ensure that all slides are well-organized, with clear headings, bullet points, and visuals such as graphs or infographics to support key points. The seminar is scheduled for October 20th, and the presentation should be ready for rehearsal at least 2 days before the event. This task requires close coordination with the marketing team to ensure consistency with our branding and messaging.",
                "date": "2024-10-20",
                "category": "Presentations",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 1,
            "newTask": 1,
            "completed": 0,
            "failed": 0
        }
    },
];



const admin = [{
    "id": 1,
    "email": "admin@me.com",
    "password": "123"
}];

export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees, admin}
} 