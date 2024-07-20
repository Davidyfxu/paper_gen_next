"use client";
import React, { useState } from "react";
import {
  AISearchResults,
  CustomContext,
  Empty,
  SubModuleHeader,
  UserInputLink,
} from "@/components";
import { CiSearch } from "react-icons/ci";

enum ChoiceEnum {
  AIResults = "1",
  UserInput = "2",
  CustomContext = "3",
}
const OPTIONS = [
  { label: "AI Search Results", value: ChoiceEnum.AIResults },
  { label: "User Input Link", value: ChoiceEnum.UserInput },
  { label: "Custom Context", value: ChoiceEnum.CustomContext },
];
const KnowledgeCuration = () => {
  const [tab, setTab] = useState<null | ChoiceEnum>();

  const renderTabContent = () => {
    switch (tab) {
      case ChoiceEnum.AIResults:
        return <AISearchResults />;
      case ChoiceEnum.UserInput:
        return <UserInputLink />;
      case ChoiceEnum.CustomContext:
        return <CustomContext />;
      default:
        return <Empty />;
    }
  };
  return (
    <div className={"flex p-8 flex-col bg-base-100 flex-1"}>
      <SubModuleHeader
        title={"Knowledge Curation"}
        icon={<CiSearch />}
        buttonText={"Search"}
      />
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Research Papers Only</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div
        className="join w-full my-4"
        onClick={(e) => {
          setTab(e.target?.value || null);
        }}
      >
        {OPTIONS.map((o, index) => (
          <input
            key={index}
            className="join-item btn flex-1"
            type="radio"
            name="options"
            aria-label={o.label}
            value={o.value}
          />
        ))}
      </div>
      {renderTabContent()}
    </div>
  );
};

export default KnowledgeCuration;
