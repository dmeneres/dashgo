import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right" >
          <Text>Diogo Menéres</Text>
          <Text color="gray.300" fontSize="small">dmeneres@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Diogo Menéres" src="https://github.com/dmeneres.png" />
    </Flex>

  )
}