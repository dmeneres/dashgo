import { SearchIcon } from "@chakra-ui/icons";
import { Flex, Icon, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  const searchInputRef = useRef<HTMLInputElement>(null)

  return (
    <InputGroup
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Search"
        _placeholder={{ color: "gray.400" }}
        ref={searchInputRef}
      />
      <InputRightElement 
        h="full" 
        px="4" 
        mr="4" 
        alignItems="center" 
        children={<SearchIcon color='gray.200' />}
      />
    </InputGroup>
    // <Flex
    //   as="label"
    //   flex="1"
    //   py="4"
    //   px="8"
    //   ml="6"
    //   maxW={400}
    //   alignSelf="center"
    //   color="gray.200"
    //   position="relative"
    //   bg="gray.800"
    //   borderRadius="full"
    // >
    //   <Input 
    //     color="gray.50"
    //     variant="unstyled"
    //     px="4"
    //     mr="4"
    //     placeholder="Search"
    //     _placeholder={{ color: "gray.400" }}
    //   />
    //   <Icon as={RiSearchLine} />
    // </Flex>
  )
}

 