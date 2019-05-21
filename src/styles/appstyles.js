import styled from 'styled-components';

export const Body = styled.body`
  margin: 0;
  padding: 0;
  background: #e9ebee;
  font-family: sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
`;

export const HeaderStyle = styled.div`
  background: #4267b2;
  border-bottom: 1px solid #29487d;
  height: 60px;
  color: #ffff;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostStyle = styled.div`
  width: 700px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #ffffff;
  margin-top: 30px;

  p {
    font-size: 16px;
    color: #333333;
    line-height: 24px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #eee;
  }
`;

export const PostHeaderStyle = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

export const DataStyle = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 16px;
    color: #666666;
  }

  span {
    font-size: 14px;
    color: #999999;
    margin-top: 5px;
  }
`;

export const PostContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
