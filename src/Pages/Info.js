import { HStack, Image, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import Rafael from '../Images/Rafael.png';
import Will from '../Images/Will.jpg';
import Phoebe from '../Images/Phoebe.jpg';
import Meredith from '../Images/Meredith.png';
import Cole from '../Images/Cole.jpg';
import Lily from '../Images/Lily.jpg';
import Gabriel from '../Images/Gabriel.jpg';

export function Info() {
	return (
		<>

            <RouterLink to={'/'}><Text marginTop={'20px'} marginLeft={'20px'}> –– Back </Text></RouterLink>

            <VStack>
                <Text marginX={"120px"} marginTop={"50px"}>Hack ^ 2 is a hackathon organized by the members of Hackley CS Club and Girls Who Code. 
                    Our mission is to organize a competition that is educational and fun 
                    using the space in the new Center for Creative Arts and Technology. 
                    2024 marks our inaugural year, and we hope to host this competition annually going forward. 
                    The prompt for this year is TBA, and we hope to see everyone on <Link href={"https://www.google.com"} textDecoration={'underline'}>January 14, 2025 @ The CCAT</Link>.</Text>

                <Text paddingTop={'25px'}></Text>

                <Text paddingTop={'25px'} fontWeight={600}>The Team</Text>

                <HStack paddingTop={'25px'} spacing={'100px'}>

                    <VStack>
                        <Image src={Rafael} alt='Rafael' width={'185px'} height={'175px'}/>
                        <Text>Rafael Castro, '25</Text>
                    </VStack>

                    <VStack>
                        <Image src={Will} alt='Will' width={'180px'} height={'180px'}/>
                        <Text>William Dupont, '25</Text>
                    </VStack>

                    <VStack>
                        <Image src={Phoebe} alt='Phoebe' width={'180px'} height={'180px'}/>
                        <Text>Phoebe Dungca, '25</Text>
                    </VStack>

                    <VStack>
                        <Image src={Meredith} alt='Meredith' width={'180px'} height={'180px'}/>
                        <Text>Meredith Lee, '25</Text>
                    </VStack>

                </HStack>

                <HStack paddingTop={'40px'} spacing={'100px'}>

                    <VStack>
                        <Image src={Cole} alt='Cole' width={'180px'} height={'180px'}/>
                        <Text>Cole Byrne, '25</Text>
                    </VStack>

                    <VStack>
                        <Image src={Lily} alt='Lily' width={'180px'} height={'180px'}/>
                        <Text>Lily Adams, '25</Text>
                    </VStack>

                    <VStack>
                        <Image src={Gabriel} alt='Gabriel' width={'180px'} height={'180px'}/>
                        <Text>Gabriel Fossner, '27</Text>
                    </VStack>

                </HStack>

            </VStack>
		</>
	);
}