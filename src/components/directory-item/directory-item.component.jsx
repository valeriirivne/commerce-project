import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer,
  BackgroundImage,
  Body,
} from './directory-item.styles';

const DirectoryItem = (props) => {
  const imageUrl = props.category.imageUrl;
  const title = props.category.title;
  const route = props.category.route;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
