import React from 'react';
import styled from 'styled-components';

import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import DraftsIcon from 'material-ui-icons/Drafts';
import StarIcon from 'material-ui-icons/Star';

import { AUTHOR_MAIL, AUTHOR_GITHUB } from '../constants/contact-info';

const Container = styled(List)`
  && {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex: 0;
    padding: 0;
    overflow: hidden;
    min-height: 60px;
    height: 60px;
  }
`;

const ListContainer = styled(List)`
  && {
    display: flex;
    align-items: flex-end;
    flex-direction: row;
    padding: 0;
    overflow: hidden;
    flex-grow: 0;
    height: 60px;
    padding-bottom: 15px;
  }
`;

const ListItemContainer = styled(ListItem)`
  && {
    margin: 0px;
    padding: 0 10px 0 10px;
  }
`;

export default class Footer extends React.PureComponent {
  render() {
    return (
      <Container>
        <ListContainer>
          <ListItemContainer
            button
            onClick={() => window.open(AUTHOR_GITHUB, '_blank')}
          >
            {' '}
            <ListItemText primary="© 2018, Mitchell Burr Bedard" />
          </ListItemContainer>
        </ListContainer>
        <ListContainer>
          <ListItemContainer
            button
            onClick={() =>
              window.open(
                `mailto:${AUTHOR_MAIL}?subject=Question&body=Hi, Mitchell!`,
              )
            }
          >
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
          </ListItemContainer>
          <ListItemContainer
            button
            onClick={() =>
              window.open(`${AUTHOR_GITHUB}/MUISCRR-boilerplate`, '_blank')
            }
          >
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
          </ListItemContainer>
        </ListContainer>
      </Container>
    );
  }
}
