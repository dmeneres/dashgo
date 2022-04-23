import { BellIcon } from "@chakra-ui/icons";
import { HStack, Icon } from "@chakra-ui/react";
import { RiUserAddLine } from "react-icons/ri";

export function NotificationNav() {
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"  
    >
      <BellIcon fontSize="20" />
      <Icon as={RiUserAddLine} fontSize="20" />
    </HStack>
)
}