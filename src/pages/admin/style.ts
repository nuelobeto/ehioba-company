import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const Main = styled.main`
  background-color: ${COLORS.lightGray};
  min-height: 90vh;
  margin: 10vh 0 0;
`;

export const SearchXFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  column-gap: 1rem;
  row-gap: 5px;
  margin: 0.5rem 0;
`;

export const SearchBar = styled.form`
  display: flex;
  align-items: center;
  min-width: 250px;
  flex: 1;
  position: relative;

  input {
    outline: none;
    border: 1px solid ${COLORS.mediumGray};
    background-color: ${COLORS.veryLightGray};
    width: 100%;
    height: 40px;
    border-radius: 12px;
    padding-left: 3rem;
    font-weight: 500;
    font-size: 14px;
  }

  svg {
    position: absolute;
    left: 1rem;
    font-size: 22px;
    color: gray;
  }
`;

export const Filter = styled.div`
  select {
    outline: none;
    border: 1px solid ${COLORS.mediumGray};
    background-color: ${COLORS.veryLightGray};
    width: 150px;
    height: 40px;
    border-radius: 12px;
    padding-left: 1rem;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0 0;
  flex-wrap: wrap;
`;

export const Stat = styled.div`
  min-width: 280px;
  flex: 1;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  background-color: ${COLORS.white};
  border-radius: 1rem;

  img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    border-radius: 0.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  span {
    font-size: 14px;
    color: ${COLORS.textGray};
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-height: calc(90vh - 142px - 0.75rem);
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: auto;
`;

export const Table = styled.table`
  min-width: 900px;
  width: 100%;
  border-collapse: collapse;
  overflow: auto;
  background-color: ${COLORS.white};

  th:last-child,
  td:last-child {
    position: sticky;
    right: 0;
  }

  td:last-child {
    background-color: ${COLORS.veryLightGray};
  }
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  border-bottom: 1px solid ${COLORS.mediumGray};
  padding: 1rem;
  font-size: 14px;
  color: ${COLORS.textGray};
  text-align: left;
  background-color: ${COLORS.bgGreen};
`;

export const Td = styled.td`
  border-bottom: 1px solid ${COLORS.mediumGray};
  padding: 1rem;
  font-size: 12px;
  color: ${COLORS.black};
  text-align: left;
  font-weight: 600;

  .action {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &.date {
    min-width: 150px;
  }
`;

export const ActionBtn = styled.button`
  padding: 5px 7px;
  color: #fff;
  border-radius: 8px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 16px;

  &.edit {
    background-color: ${COLORS.darkGreen};
    &:hover {
      background-color: ${COLORS.lightGreen};
    }
  }

  &.delete {
    background-color: ${COLORS.danger};
    &:hover {
      background-color: ${COLORS.darkDanger};
    }
  }
`;

export const NoTableData = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
`;
