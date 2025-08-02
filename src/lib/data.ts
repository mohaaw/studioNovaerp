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

export const recentActivities = [
  { user: { name: 'Alice Johnson', avatar: 'https://placehold.co/32x32/D0BFFF/47386B.png' }, action: 'closed deal "Project Titan"', timestamp: '5m ago' },
  { user: { name: 'System', avatar: '' }, action: 'generated "Q4 Sales Report"', timestamp: '1h ago' },
  { user: { name: 'Bob Williams', avatar: 'https://placehold.co/32x32/ADD8E6/2E4D56.png' }, action: 'updated task "Fix login bug"', timestamp: '2h ago' },
  { user: { name: 'AI Assistant', avatar: '' }, action: 'flagged inventory "SKU-123" for reorder', timestamp: '3h ago' },
  { user: { name: 'Charlie', avatar: 'https://placehold.co/32x32/F2F2F5/333333.png' }, action: 'submitted expense report for $250', timestamp: '4h ago' },
]

export const salesLeaderboard = [
    { id: 'USR-001', name: 'Alice Johnson', role: 'Sales Lead', sales: 150000, avatarUrl: 'https://placehold.co/32x32/D0BFFF/47386B.png' },
    { id: 'USR-005', name: 'Grace Lee', role: 'Sales Rep', sales: 125000, avatarUrl: 'https://placehold.co/32x32/F5D6C6/7C5B4D.png' },
    { id: 'USR-002', name: 'Bob Williams', role: 'Account Manager', sales: 110000, avatarUrl: 'https://placehold.co/32x32/ADD8E6/2E4D56.png' },
];

export const projectStatuses = [
    { name: 'Project Alpha', progress: 75, status: 'On Track' },
    { name: 'Project Beta', progress: 30, status: 'At Risk' },
    { name: 'Project Gamma', progress: 90, status: 'On Track' },
    { name: 'Project Delta', progress: 50, status: 'Needs Review' },
];


export const salesPipelineData = [
  { name: 'Leads', value: 400, fill: "hsl(var(--chart-1))" },
  { name: 'Qualified', value: 300, fill: "hsl(var(--chart-2))" },
  { name: 'Proposal', value: 200, fill: "hsl(var(--chart-3))" },
  { name: 'Negotiation', value: 100, fill: "hsl(var(--chart-4))" },
  { name: 'Closed', value: 50, fill: "hsl(var(--chart-5))" },
]

export const upcomingDeadlines = [
    { id: 'DEADLINE-1', title: 'Submit Q1 Financials', type: 'Report', dueDate: '2024-04-30', assignee: { name: 'Frank', avatarUrl: 'https://placehold.co/32x32/F0E68C/6B632B.png' } },
    { id: 'DEADLINE-2', title: 'Project Alpha Launch', type: 'Project', dueDate: '2024-05-15', assignee: { name: 'Alice', avatarUrl: 'https://placehold.co/32x32/D0BFFF/47386B.png' } },
    { id: 'DEADLINE-3', title: 'Renew Enterprise License', type: 'Contract', dueDate: '2024-06-01', assignee: { name: 'Admin', avatarUrl: '' } },
];
