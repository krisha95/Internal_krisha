import avatar1 from "@/assets/images/users/avatar-1.jpg";
import avatar2 from "@/assets/images/users/avatar-2.jpg";
import avatar3 from "@/assets/images/users/avatar-3.jpg";
import avatar4 from "@/assets/images/users/avatar-4.jpg";
import avatar5 from "@/assets/images/users/avatar-5.jpg";
import avatar6 from "@/assets/images/users/avatar-6.jpg";
import avatar7 from "@/assets/images/users/avatar-7.jpg";
import avatar8 from "@/assets/images/users/avatar-8.jpg";
import avatar9 from "@/assets/images/users/avatar-9.jpg";
import avatar10 from "@/assets/images/users/avatar-10.jpg";

interface Task {
  id: number;
  taskName: string;
  createdDate: string;
  dueDate: string;
  assigned: {
    name: string;
    avatar: string;
  };
  status: string;
  priority: string;
  completed: boolean;
}



export const tasks = [
  {
    id: 1,
    taskName: "Review system logs for any reported errors",
    createdDate: "23 April, 2024 05:09 PM",
    dueDate: "30 April, 2024",
    assigned: {
      name: "Sean Kemper",
      avatar: avatar2,
    },
    status: "In-progress",
    priority: "High",
    completed: false,
  },
  {
    id: 2,
    taskName: "Conduct user testing to identify potential bugs",
    createdDate: "14 May, 2024 10:51 AM",
    dueDate: "25 Aug, 2024",
    assigned: {
      name: "Victoria Sullivan",
      avatar: avatar3,
    },
    status: "Pending",
    priority: "Low",
    completed: true,
  },
  {
    id: 3,
    taskName: "Gather feedback from stakeholders regarding any issues",
    createdDate: "12 April, 2024 12:09 PM",
    dueDate: "28 April, 2024",
    assigned: {
      name: "Liam Martinez",
      avatar: avatar4,
    },
    status: "In-progress",
    priority: "High",
    completed: false,
  },
  {
    id: 4,
    taskName: "Prioritize bugs based on severity and impact",
    createdDate: "10 April, 2024 10:09 PM",
    dueDate: "15 April, 2024",
    assigned: {
      name: "Emma Johnson",
      avatar: avatar5,
    },
    status: "Completed",
    priority: "Medium",
    completed: false,
  },
  {
    id: 5,
    taskName: "Investigate and analyze the root cause of each bug",
    createdDate: "22 May, 2024 03:41 PM",
    dueDate: "05 July, 2024",
    assigned: {
      name: "Olivia Thompson",
      avatar: avatar1,
    },
    status: "Pending",
    priority: "Low",
    completed: false,
  },
  {
    id: 6,
    taskName: "Develop and implement fixes for the identified bugs",
    createdDate: "18 May, 2024 09:09 AM",
    dueDate: "30 April, 2024",
    assigned: {
      name: "Noah Garcia",
      avatar: avatar6,
    },
    status: "Completed",
    priority: "Low",
    completed: false,
  },
  {
    id: 7,
    taskName: "Complete any recurring tasks",
    createdDate: "05 April, 2024 08:50 AM",
    dueDate: "22 April, 2024",
    assigned: {
      name: "Sophia Davis",
      avatar: avatar7,
    },
    status: "New",
    priority: "High",
    completed: false,
  },
  {
    id: 8,
    taskName: "Check emails and respond",
    createdDate: "15 Jun, 2024 11:09 PM",
    dueDate: "01 Aug, 2024",
    assigned: {
      name: "Isabella Lopez",
      avatar: avatar8,
    },
    status: "Pending",
    priority: "Low",
    completed: false,
  },
  {
    id: 9,
    taskName: "Review schedule for the day",
    createdDate: "22 April, 2024 05:09 PM",
    dueDate: "30 April, 2024",
    assigned: {
      name: "Ava Wilson",
      avatar: avatar9,
    },
    status: "In-progress",
    priority: "Medium",
    completed: true,
  },
  {
    id: 10,
    taskName: "Daily stand-up meeting",
    createdDate: "23 April, 2024 12:09 PM",
    dueDate: "30 April, 2024",
    assigned: {
      name: "Oliver Lee",
      avatar: avatar10,
    },
    status: "In-progress",
    priority: "High",
    completed: false,
  },
];
