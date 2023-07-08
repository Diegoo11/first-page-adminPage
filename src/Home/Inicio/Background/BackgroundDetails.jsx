import React from 'react';
import { useMutation } from '@apollo/client'; import {
  findID, FormBox, FormImage, FormText,
} from '../../../util';
import { UPDATE_MODULE } from '../../Header/Mutation';

function BackgroundDetails({ images, texts }) {
  const imageBg = images.find(findID('649b166f083daa9c8af6e139'));
  const textBg = texts.find(findID('64a39756de4fc89914038f06'));
  const title = texts.find(findID('649f8b8fe527c66bfbf3f850'));

  const [editModule, { loading, error }] = useMutation(UPDATE_MODULE);

  const handleSubmit = (event) => {
    event.preventDefault();
    const infoInput = new FormData(event.currentTarget);
    editModule({
      variables: {
        username: infoInput.get('username'),
        password: infoInput.get('password'),
      },
    });
  };

  if (loading) return 'Submitting...';
  if (error) { console.log(error); return `Submission error! ${error.message}`; }

  return (
    <FormBox handleSubmit={handleSubmit} changes={false}>
      <FormImage
        img={imageBg}
        src={imageBg.src}
        alt={imageBg.alt}
        srcMobile={imageBg.srcMobile}
        imgLink={imageBg.link}
      />
      <FormText
        text={textBg}
        name={textBg.name}
        description={textBg.description}
        textLink={textBg.link}
      />
      <FormText
        text={title}
        name={title.name}
        description={title.description}
        textLink={title.link}
      />
    </FormBox>
  );
}

export default BackgroundDetails;
