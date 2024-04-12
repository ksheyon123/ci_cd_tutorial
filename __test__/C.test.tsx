import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

const NAME1 = "1";
const DESCRIPTION1 = "DESCRIPTION1";

// Test Cases : items 수 확인, child component 렌더 확인, 열고 닫힘 확인, 아이템 삭제 확인

const mainComponent = <div>{NAME1}</div>;
const childComponent = <div>{DESCRIPTION1}</div>;

describe("Accordion component", () => {});
