import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { ApexOptions } from 'apexcharts';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'),{
  ssr: false,
})

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2022-04-10T00:00:00.000Z',
      '2022-04-11T00:00:00.000Z',
      '2022-04-12T00:00:00.000Z',
      '2022-04-13T00:00:00.000Z',
      '2022-04-14T00:00:00.000Z',
      '2022-04-15T00:00:00.000Z',
      '2022-04-16T00:00:00.000Z'
    ]
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [
  { name: 'series1', data: [31, 120, 23, 65, 90, 76, 13] }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb={["2","4"]}
          >
            <Text fontSize="lg" mb="4">Last week subscribers</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Open rate</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}