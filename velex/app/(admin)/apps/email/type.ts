interface Attachment {
  type: "pdf";
  name: string;
}

interface Email {
  id: number;
  sender: string;
  subject: string;
  content: string;
  starred: boolean;
  important: boolean;
  date: string;
  read: boolean;
  attachments?: (Attachment | string)[];
}
