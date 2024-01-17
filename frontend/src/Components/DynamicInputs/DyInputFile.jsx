import {
    Box,
    FormLabel,
    Input,
    Flex,
    Text,
    Image,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
  
  const DyInputFile = ({title, value, name, onChange,id}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [showImg, setShowImg] = useState(null)

    const handleFileChange = (e) => {
      let file = e.target.files[0];
      onChange(file);
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })

        setSelectedFile(file)
      };      


    return (
      <Box position="relative">
        <Text fontWeight={"medium"} lineHeight={1}>
          {title}
        </Text>
          <Flex direction="column" mb="0.875rem">
            <Box border="2px dashed #ddd" height="50px" cursor="grab" alignItems="center" justifyContent="center" display="flex"
              _hover={{
                borderColor: '#b9292f',
              }}
            >
              <input accept=".pdf, image/*" onChange={handleFileChange} type="file" id={id} style={{display: "none"}}  name={name} />
              <FormLabel w='full' textAlign={'center'} htmlFor={id} fontWeight='medium'>Drag & Drops</FormLabel>

            </Box>
            <Flex mt="2" gridGap="10px">
                {selectedFile && (
                    <Box position="relative" borderRadius="5px" overflow="hidden">
                        <Image src={selectedFile?.preview} alt="Selected" objectFit="cover" w="50px" h="50px" />
                    </Box>
                )}
            </Flex>
          </Flex>
      </Box>
    );
  };
  
  export default DyInputFile;
  