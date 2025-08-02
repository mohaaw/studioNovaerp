export type Task = {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'in-review' | 'done';
  priority: 'Low' | 'Medium' | 'High';
  assignee: {
    name: string;
    avatarUrl: string;
  };
};

export const mockTasks: Task[] = [
  { id: 'TASK-1', title: 'Develop new homepage design', status: 'in-progress', priority: 'High', assignee: { name: 'Alice', avatarUrl: 'https://placehold.co/32x32/D0BFFF/47386B.png' } },
  { id: 'TASK-2', title: 'Fix login authentication bug', status: 'in-review', priority: 'High', assignee: { name: 'Bob', avatarUrl: 'https://placehold.co/32x32/ADD8E6/2E4D56.png' } },
  { id: 'TASK-3', title: 'Write documentation for API', status: 'todo', priority: 'Medium', assignee: { name: 'Charlie', avatarUrl: 'https://placehold.co/32x32/F2F2F5/333333.png' } },
  { id: 'TASK-4', title: 'Set up staging server', status: 'done', priority: 'High', assignee: { name: 'Alice', avatarUrl: 'https://placehold.co/32x32/D0BFFF/47386B.png' } },
  { id: 'TASK-5', title: 'Update user profile page UI', status: 'in-progress', priority: 'Medium', assignee: { name: 'David', avatarUrl: 'https://placehold.co/32x32/C1E1C1/3B5A3B.png' } },
  { id: 'TASK-6', title: 'Research new charting library', status: 'todo', priority: 'Low', assignee: { name: 'Eve', avatarUrl: 'https://placehold.co/32x32/FFDAB9/7C4A2D.png' } },
  { id: 'TASK-7', title: 'Onboard new marketing team', status: 'done', priority: 'Medium', assignee: { name: 'Bob', avatarUrl: 'https://placehold.co/32x32/ADD8E6/2E4D56.png' } },
  { id: 'TASK-8', title: 'Finalize Q4 budget', status: 'todo', priority: 'High', assignee: { name: 'Frank', avatarUrl: 'https://placehold.co/32x32/F0E68C/6B632B.png' } },
];

export const columns = [
  { id: 'todo', title: 'To Do' },
  { id: 'in-progress', title: 'In Progress' },
  { id: 'in-review', title: 'In Review' },
  { id: 'done', title: 'Done' },
];

export const mockDocuments = [
    { id: 'DOC-001', name: 'Q4 Financial Report.pdf', version: 'v2.1', lastModified: '2023-10-26', owner: 'Alice Johnson' },
    { id: 'DOC-002', name: 'Marketing Strategy 2024.docx', version: 'v1.0', lastModified: '2023-10-22', owner: 'Bob Williams' },
    { id: 'DOC-003', name: 'Onboarding Guide.pptx', version: 'v3.5', lastModified: '2023-10-20', owner: 'Admin' },
    { id: 'DOC-004', name: 'Project Phoenix Retrospective.md', version: 'v1.0', lastModified: '2023-10-18', owner: 'Charlie Brown' },
]

export const mockUsers = [
    { id: 'USR-001', name: 'Alice Johnson', email: 'alice@meerps.com', role: 'Admin', status: 'Active' },
    { id: 'USR-002', name: 'Bob Williams', email: 'bob@meerps.com', role: 'Manager', status: 'Active' },
    { id: 'USR-003', name: 'Charlie Brown', email: 'charlie@meerps.com', role: 'Employee', status: 'Active' },
    { id: 'USR-004', name: 'David Smith', email: 'david@meerps.com', role: 'Employee', status: 'Inactive' },
]

export const mockWorkflows = [
    { id: 'WF-001', name: 'New Employee Onboarding', trigger: 'HR System: New Hire', status: 'Active' },
    { id: 'WF-002', name: 'Purchase Order Approval', trigger: 'Form: PO Submitted', status: 'Active' },
    { id: 'WF-003', name: 'Customer Support Escalation', trigger: 'Help Desk: Ticket > High Prio', status: 'Active' },
    { id: 'WF-004', name: 'Weekly Report Generation', trigger: 'Schedule: Every Friday 5pm', status: 'Inactive' },
]
