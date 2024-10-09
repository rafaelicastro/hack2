import * as React from "react";
import {
	Button,
	Flex,
	Heading,
	HStack,
	Icon,
	Spacer,
	Link,
	VStack,
	Text,
	useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
// import { useTimeout } from "react-use"; // TODO make sure works
import { useTimeout } from '@uidotdev/usehooks';

function DelayedComponent({ hasLoaded }) {

    const artText = `     

                                                                                          %                             
                                              .(%%%%#((((((((((((#%%%%(.                %%%%%                           
                                         %%%((((((((%##%#%(((((((##(((((((%%%         .%%%%%%%.                         
                                    .%%(((((%(((#(((((##(%((((((((((%((#((#((((%%        (%*                            
                                 *%((((#%((((#((((((###((((%((((((((((#(((#(((#(((#%/     .  .(%%%%%%%#                 
                               %#(((#(((((#%##((###%#(((((##((#(((#(((((#%((((#(##%((#%.           %%%%%%#              
                            *%(((##(#(((((((((##%%%%##(((((((#(#(((##(###(/##%##%%#(##((%*          %%%%%%              
                          .%//(#((((##((/(((((((((((#####((((((##%%%%#((((((((((##(((/(%//%.       (%%%%%               
                         %((/(((#/%(((((%(#((((((((((##(/((##((#%%###(###/##(%((##/#(/(%/#(#%     #%%%%%     %.         
                       .%((#(#(((((((#((#(((((###(((((#(((##(((((#(((#((((((#(((#(((((#(#####%.  %%%%%.     .%(         
                      (%((##(((((#(((((((##((((((##((((((((#(##(#(#(((#(#((%(((#((((#(%%/#(%*##%%%%%%                   
                     *%((%(#((%(((%(((#(((((((#((((##(((((((((((((#(%((#(((((#((((##((%%%%%%%%%%%%                      
                    .%((#((##((((((#(((((((#(((((#(((#(((((#(((((((((((((((#(((#((((#(%%*%%%%%%%%                       
                    %(((((%(#(((#(((((((#((((#(((((((((((#(((((((#((((((((((#((#(%((((%%%%###%%##%                      
                   .%((%(#(%%%%%%((&%%%&((((#((%%%%#((((%((((((%%%%%%((((#%%%%%%((%%%%%%%%#(#((#(%                      
                   /%((((%%%,,,,%%%,,,,/%(%((%%%,,,(%((((((%%*,,,,,,,##%%%%,,,,#%%,,,%%%(#(#(#(%(%/                     
                   (%((#((%%/,,/%%%&,,,%##(((%%%,,,,#%#((%%%,,,#%%%%,,%%(%%(,,*%,,%%%%((((%((((#(##                     
                   /%(((((%%/,,,,,,,,,,%((((%%%,,%%,,(%((%%(,,,/%#%%%#(((%%(,,,,,,%%((((((((((##(%#                     
                   .%(((((%%/,,/%%%&,,,%(((%%#,,,,,,,,(%(%%%,,,,&%((%%%%%%%(,,*%*,,,%%#((((#((%#(%                      
                    %((#(%%/,,,,(%%,,,,,%%%(,,,*%%%,,,,,*%%%%#,,,,,,,/%%%%(,,,,/%%,,,,,#%((((#%((%                      
                    .%((((%%%%%%(%%%%%%###%%%%%#/%%%%%%%#(##(%%%%%%%%%%(#%%%%%%(%%%%%%##(((#((&(%*                      
                     %#(((#(((((#(((((((#(((#(((((((((((((((#%%%%%%(%((((((#(((((%(((((#(((#(((%#                       
                      %#((((#((((#(((((#((((((((##((((((#%%%%%%((((((((((((((((((%(((#(#((((#(#%                        
                       #%(((##((((((((((((((((((((((%%%%%%%((((((((#((((((#((((###((((((((##(%%                         
                        .%((#(((#((((((((#(((((%%%%%%%#((((%((((((((((((((#(((((((((((##((((%*                          
                          %#((#(#(%((#((((%%%%%%%%(#((((((#(((((((#((((((#((((((#(#((%((%(%%                            
          .&                %%((#(((%%%%%%%%#(((((#(#%(((#(((((((#((((((((((%(((((((###(#%                              
          %%%                %%%%%%%%%%((%(((((((#((((((((((((((#((((((((((((((((%/#((%%                                
          %%%%%%%%%%%%%%%%%%%%%%(%%(((((((((((#(#(((((((((((((((((((((#(((((%%((#((%%.                                  
           (%%%%%%%%%%%%*.          %%((((#((((#((((((##%%#(((#(##%#(#(((((##(((%%.                                     
                              %        .%%#((((##((((#(((((((#(((((#((#((((#%%.                                         
                             .%(             /%%%#((((((((((((((((((#%%%/.                                              
                                                       ...**...                                                         
	`;

	const artTextSmall = `
					%%((((((((((&*   .&&&&.         
				&(((((((#(((#((#(%(((/   /&&&       
				((((/%((((((##(#%#%((((#(&    &&      
			&(((%(((((%((%%%#(#(%(##(((((/ &&  #%   
			&(((((((((((((((%((((((((((%&.%&         
			((((#((#((((((((#(#((((%(((&&%((         
			&((&.#&./%(&..&(&..&..(&.&(%(((#(         
			.((&.(&.*(&.&&.&&/.%&.&&.&.,%(%((         
			&((((#(((#(((((((&&%(((((((((##&         
			&(((((%((#(#&&%(((((((#(((##(&          
				(#(#%&&&(#((#((((((((#((#%            
		&&&&&&&&&&&(((((#((#((((((((#((&              
				(%   .&((#((((/(#((&                  
	`;

  	const width = window.screen.width;

	const parts = width < 500 ? artTextSmall.split(/([,%])/) : artText.split(/([,%])/);
	const keyPart = width < 500 ? "." : ",";

	if (hasLoaded) {
		return (
			<VStack>

				<Heading fontSize={'40px'} marginTop={'10px'}>Hack ^ 2</Heading>


				<Text fontSize={'xs'} whiteSpace={'pre'} lineHeight={'14px'}>
					{parts.map((part, index) =>
          				part === keyPart ? (
							<Text as="b" key={index}>
								■
							</Text>
						) : (
							part
						)
        )}
				</Text>
	
				<Text paddingTop={"40px"}>A collaboration between Hackley's <Link href={"https://www.instagram.com/hackleycs"} textDecoration={"underline"} _hover={{textDecoration: 'underline' }}>CS Club</Link> and <Link href={"https://www.instagram.com/hackgirlswhocode"} textDecoration={"underline"} _hover={{textDecoration: 'underline' }}>Girls Who Code</Link>.</Text>

				<HStack spacing={'40px'}>
	
					<Link href={'https://www.google.com'}><Text marginTop={"15px"} padding={'8px'} fontWeight={550}>Sign Up</Text></Link>
					
					<RouterLink to={'/info'}><Text marginTop={"15px"} padding={'8px'} fontWeight={550}>Learn More</Text></RouterLink>
	
				</HStack>
	
			</VStack>
		);
	} else {
		return (<></>);
	}
  }

export function Home() {
	
	const [hasLoaded, setHasLoaded] = React.useState(false);

	useTimeout(() => {
		setHasLoaded(!hasLoaded);
	}, 4500);

	// const time = useTimeout(() => { setHasLoaded(true) }, 4);

	const {colorMode, toggleColorMode} = useColorMode()

	return (
		<>	
			<Flex>
				<Text alignContent={'left'} paddingTop={'10px'} paddingLeft={'10px'}> {/* onAnimationStart={"running"} */}
					<Typewriter cursorBlinking={false} onInit={(typewriter) => {
						typewriter
							.typeString("bash-5.1$ ")
							.pauseFor(1000)
							.typeString("start")
							.start();
					}}
				/>
				</Text>
				<Spacer />
				<Button onClick={toggleColorMode} background={'transparent'}>
					<Icon as={colorMode === 'light' ? MoonIcon : SunIcon} marginRight={'30px'} marginTop={'15px'} boxSize={5}/>
				</Button>
			</Flex>

			{<DelayedComponent hasLoaded={hasLoaded}/>}
			
		</>
	);
}