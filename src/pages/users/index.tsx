import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
      base: false,
      lg: true
  });

  return (
    <Box w="full">
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6" >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center" >
            <Heading size="lg" fontWeight="normal" >Users</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
              >
                Create new
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8" >
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                { isWideVersion && <Th>Registration time</Th> }
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Diogo Menéres</Text>
                    <Text fontSize="sm" color="gray.300" >dmeneres@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>April 4th 2022</Td>}
                
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Diogo Menéres</Text>
                    <Text fontSize="sm" color="gray.300" >dmeneres@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>April 4th 2022</Td>}
                
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Diogo Menéres</Text>
                    <Text fontSize="sm" color="gray.300" >dmeneres@gmail.com</Text>
                  </Box>
                </Td>
                { isWideVersion && <Td>April 4th 2022</Td>}
                
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}