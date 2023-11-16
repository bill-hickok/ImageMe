export interface DocType {
  id: number;
  docTypeNo: string;
  docTypeName: string;
  status: string;
  keywords: string;
  lastModified: string;
  modifiedBy: string;
  dateCreated: string;
  createdBy: string;
}

export class DocTypesAPI {
  static getAll = (): DocType[] => [
    {
      id: 1,
      docTypeNo: "12345678",
      docTypeName: "Contract Agreement",
      status: "Active",
      keywords: "Contract, Legal",
      lastModified: "2023-01-01",
      modifiedBy: "User 1",
      dateCreated: "2022-01-01",
      createdBy: "User 2",
    },
    {
      id: 2,
      docTypeNo: "45678912",
      docTypeName: "Technical Manual",
      status: "Inactive",
      keywords: "Technical, Guide",
      lastModified: "2023-02-15",
      modifiedBy: "User 3",
      dateCreated: "2022-02-20",
      createdBy: "User 4",
    },
    {
      id: 3,
      docTypeNo: "78912345",
      docTypeName: "Financial Report",
      status: "Active",
      keywords: "Finance, Report",
      lastModified: "2023-03-05",
      modifiedBy: "User 2",
      dateCreated: "2022-03-10",
      createdBy: "User 1",
    },
    {
      id: 4,
      docTypeNo: "56789123",
      docTypeName: "HR Policy",
      status: "Under Review",
      keywords: "Human Resources, Policy",
      lastModified: "2023-04-12",
      modifiedBy: "User 4",
      dateCreated: "2022-04-22",
      createdBy: "User 3",
    },
    {
      id: 5,
      docTypeNo: "34567891",
      docTypeName: "Project Plan",
      status: "Active",
      keywords: "Project, Planning",
      lastModified: "2023-05-18",
      modifiedBy: "User 5",
      dateCreated: "2022-05-25",
      createdBy: "User 6",
    },
  ];
}
