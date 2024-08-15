// CUSTOM ICON COMPONENT
import duotone from "@/icons/duotone";

// ==============================================================

// ==============================================================

export const navigations = [
  // {
  //   type: "label",
  //   label: "Dashboard",
  // },
  // {
  //   name: "Analytics",
  //   icon: duotone.PersonChalkboard,
  //   children: [
  //     {
  //       name: "Analytics 1",
  //       path: "/dashboard",
  //     },
  //     {
  //       name: "Analytics 2",
  //       path: "/dashboard/analytics-2",
  //     },
  //   ],
  // },
  // {
  //   name: "Finance",
  //   icon: duotone.MessagesDollar,
  //   children: [
  //     {
  //       name: "Finance 1",
  //       path: "/dashboard/finance",
  //     },
  //     {
  //       name: "Finance 2",
  //       path: "/dashboard/finance-2",
  //     },
  //   ],
  // },
  // {
  //   name: "CRM",
  //   icon: duotone.CommentsQuestionCheck,
  //   children: [
  //     {
  //       name: "CRM",
  //       path: "/dashboard/crm",
  //     },
  //     {
  //       name: "CRM 2",
  //       path: "/dashboard/crm-2",
  //     },
  //   ],
  // },
  // {
  //   name: "Sales",
  //   icon: duotone.Ecommerce,
  //   children: [
  //     {
  //       name: "Sales",
  //       path: "/dashboard/sales",
  //     },
  //     {
  //       name: "Sales 2",
  //       path: "/dashboard/sales-2",
  //     },
  //   ],
  // },
  // {
  //   name: "Ecommerce",
  //   path: "/dashboard/ecommerce",
  //   icon: duotone.RectangleCirclePlus,
  // },
  // {
  //   name: "Logistics",
  //   path: "/dashboard/logistics",
  //   icon: duotone.DiagramProject,
  // },
  // {
  //   name: "Marketing",
  //   path: "/dashboard/marketing",
  //   icon: duotone.LayerGroup,
  // },
  // {
  //   name: "LMS",
  //   path: "/dashboard/learning-management",
  //   icon: duotone.PersonCircleCheck,
  // },
  // {
  //   name: "Job Management",
  //   path: "/dashboard/job-management",
  //   icon: duotone.PersonCircleCheck,
  // },
  {
    type: "label",
    label: "Management",
  },
  {
    name: "Profile",
    icon: duotone.UserProfile,
    path: "/dashboard/profile",
  },
  {
    name: "Account",
    icon: duotone.Accounts,
    path: "/dashboard/account",
  },
  {
    name: "Users",
    icon: duotone.UserList,
    children: [
      {
        name: "Add User",
        path: "/dashboard/add-user",
      },
      {
        name: "User List 1",
        path: "/dashboard/user-list",
      },
      {
        name: "User Grid 1",
        path: "/dashboard/user-grid",
      },
      {
        name: "User List 2",
        path: "/dashboard/user-list-2",
      },
      {
        name: "User Grid 2",
        path: "/dashboard/user-grid-2",
      },
    ],
  },
  // {
  //   name: "Products",
  //   icon: duotone.AdminEcommerce,
  //   children: [
  //     {
  //       name: "Product List",
  //       path: "/dashboard/product-list",
  //     },
  //     {
  //       name: "Product Grid",
  //       path: "/dashboard/product-grid",
  //     },
  //     {
  //       name: "Create Product",
  //       path: "/dashboard/create-product",
  //     },
  //     {
  //       name: "Product Details",
  //       path: "/dashboard/product-details",
  //     },
  //   ],
  // },
  // {
  //   name: "Invoice",
  //   icon: duotone.Invoice,
  //   children: [
  //     {
  //       name: "Invoice List",
  //       path: "/dashboard/invoice-list",
  //     },
  //     {
  //       name: "Invoice Details",
  //       path: "/dashboard/invoice-details",
  //     },
  //     {
  //       name: "Create Invoice",
  //       path: "/dashboard/create-invoice",
  //     },
  //   ],
  // },
  // {
  //   name: "Ecommerce",
  //   icon: duotone.Ecommerce,
  //   children: [
  //     {
  //       name: "Cart",
  //       path: "/dashboard/cart",
  //     },
  //     {
  //       name: "Payment",
  //       path: "/dashboard/payment",
  //     },
  //     {
  //       name: "Billing Address",
  //       path: "/dashboard/billing-address",
  //     },
  //     {
  //       name: "Payment Complete",
  //       path: "/dashboard/payment-complete",
  //     },
  //   ],
  // },
  {
    name: "Projects",
    icon: duotone.ProjectChart,
    children: [
      {
        name: "Project 1",
        path: "/dashboard/projects/version-1",
      },
      {
        name: "Project 2",
        path: "/dashboard/projects/version-2",
      },
      {
        name: "Project 3",
        path: "/dashboard/projects/version-3",
      },
      {
        name: "Project Details",
        path: "/dashboard/projects/details",
      },
      {
        name: "Team Member",
        path: "/dashboard/projects/team-member",
      },
    ],
  },
  {
    name: "Data Table",
    icon: duotone.DataTable,
    children: [
      {
        name: "Data Table 1",
        path: "/dashboard/data-table-1",
      },
    ],
  },
  // Esto es una idea de la integración de los chats de ejemplos dentro de la plataforma con el rol de super-admin.
  {
    type: "label",
    label: "Demos",
    access: "super-admin",
  },
  {
    name: "Chats",
    icon: duotone.Chat,
    access: "super-admin",
    children: [
      {
        name: "Cobros",
        path: "/dashboard/chats/cobros",
      },
      {
        name: "Citas",
        path: "/dashboard/chats/citas",
      },
      {
        name: "Atención al Cliente",
        path: "/dashboard/chats/atencion-cliente",
      }
    ],
  },
  // --------------------------------------------------------------
  {
    type: "label",
    label: "Apps",
    access: "client",
  },
  {
    name: "Chats",
    icon: duotone.Chat,
    access: "client",
    children: [
      {
        name: "Chat",
        path: "/dashboard/chats/chat",
      },
      {
        name: "Documentos",
        path: "/dashboard/chats/chat-documents",
      }
    ],
  },
  {
    name: "Email",
    icon: duotone.Inbox,
    access: "client",
    children: [
      {
        name: "Inbox",
        path: "/dashboard/mail/all",
      },
      {
        name: "Email Details",
        path: "/dashboard/mail/details",
      },
      {
        name: "Create Email",
        path: "/dashboard/mail/compose",
      },
    ],
  },
  {
    name: "SMS",
    icon: duotone.Pages,
    access: "client",
    children: [
      {
        name: "About",
        path: "/dashboard/about",
      },
      {
        name: "Career",
        path: "/dashboard/career",
      },
      {
        name: "Career Apply",
        path: "/dashboard/career-apply",
      },
      {
        name: "Support",
        path: "/dashboard/support",
      },
      {
        name: "Create Ticket",
        path: "/dashboard/create-ticket",
      },
      {
        name: "File Manager",
        path: "/dashboard/file-manager",
      },
    ],
  },
  // {
  //   type: "extLink",
  //   name: "Documentation",
  //   icon: duotone.FileCircleQuestion,
  //   path: "https://uko-doc.vercel.app/",
  // },
  // {
  //   type: "label",
  //   label: "Others",
  // },
  // {
  //   path: "https://uko-doc.vercel.app/",
  //   name: "Item Disabled",
  //   icon: duotone.Folder,
  //   disabled: true,
  // },
  // {
  //   name: "Multi Level Item",
  //   icon: duotone.Apps,
  //   children: [
  //     {
  //       name: "Level A",
  //       path: "#dashboard/cart",
  //     },
  //     {
  //       iconText: "B",
  //       name: "Level B",
  //       path: "#dashboard/payment",
  //       children: [
  //         {
  //           name: "Level B1",
  //           path: "#dashboard/payment",
  //         },
  //         {
  //           iconText: "B",
  //           name: "Level B2",
  //           path: "#dashboard/payment",
  //           children: [
  //             {
  //               name: "Level B21",
  //               path: "#dashboard/payment",
  //             },
  //             {
  //               name: "Level B22",
  //               path: "#dashboard/payment",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];
