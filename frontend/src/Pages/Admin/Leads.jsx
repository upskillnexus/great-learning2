import React from "react";
import useGetEnquiry from "../../Libs/Quirys/useGetEnquiry";
import { AiOutlineDelete } from "react-icons/ai";
import DataTable from "react-data-table-component";
import { Box, Button, Flex, Spinner } from "@chakra-ui/react";
import toast from "react-hot-toast";

const Leads = () => {
  const { data: lead, isPending: loading, isSuccess } = useGetEnquiry();

  const columns = [
    {
      name: "S.no",
      selector: (row, i) => i + 1,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.fullname,
      sortable: true,
    },
    {
      name: "phone",
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },

    {
      name: "course",
      selector: (row) => row.course,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div className="flex gap-3">
          <Button bg="red.500" p="1" size={"sm"} _hover={{ bg: "red.400" }} color="white" onClick={() => handleDelete(row._id)}>
            <AiOutlineDelete />
          </Button>
        </div>
      ),
    },
  ];

  const handleDelete = () => {
    toast.error("This service is not in working yet!!");
  };

  const dataTableStyle = {
    height: "600px", // Adjust the height as needed
  };
  return (
    <>
      <Flex p="5" justify={"center"} align={"center"} minH={"60vh"}>
        <Box w="75%" rounded={"md"} border="2px solid rgba(0,0,0,0.1)">
          <DataTable
            pagination
            highlightOnHover
            persistTableHead //
            fixedHeader
            fixedHeaderScrollHeight="400px"
            p="50px"
            columns={columns}
            style={dataTableStyle}
            data={loading ? [] : lead}>
            {loading && <Spinner size={"xl"} />}
          </DataTable>
        </Box>
      </Flex>
    </>
  );
};

export default Leads;
