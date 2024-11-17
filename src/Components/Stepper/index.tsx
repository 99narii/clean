import { Box, Flex, Step, StepIcon, StepIndicator, StepStatus, Stepper, StepSeparator, Text, useSteps } from "@chakra-ui/react";

const steps = [
  { title: '견적', description: '서비스 견적 확인' },
  { title: '예약', description: '상담 및 일정 예약' },
  { title: '서비스', description: '서비스 제공' },
  { title: '레포트', description: '전후 사진 제공' },
];

export default function StepperComponents() {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <Box overflowX="auto" minWidth="750px"> {/* 최소 너비 설정 및 좌우 스크롤 가능 */}
      <Stepper index={activeStep} colorScheme="teal" size="lg">
        {steps.map((step, index) => (
        <Step key={index} style={{ color: activeStep === index ? '#fff' : '#405D72' }}>
            <Flex direction="column" align="center" mb={4}>
              <StepIndicator>
                <StepStatus 
                  complete={<StepIcon boxSize={6} color="#405D72" />}
                  incomplete={
                    <Text fontSize="lg" color="gray.100">{index + 1}</Text>
                  }
                  active={
                    <Text fontSize="lg" fontWeight={600} color="#405D72">{index + 1}</Text>
                  }
                />
              </StepIndicator>
              <Box flexShrink='0' mt={2} textAlign="center">
                <Text fontSize="xl" fontWeight={600} color="#405D72">{step.title}</Text>
                <Text fontSize="md" color="#405D72">{step.description}</Text>
              </Box>
            </Flex>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
