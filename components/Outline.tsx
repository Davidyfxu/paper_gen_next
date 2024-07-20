"use client";
import React, { useState } from "react";
import { SubModuleHeader, OutlineText, OutlineCard } from "@/components/index";
import { MdGeneratingTokens } from "react-icons/md";

enum OutlineEnum {
  Card = "1",
  Text = "2",
}

const Outline = () => {
  const [tab, setTab] = useState<OutlineEnum>(OutlineEnum.Card);
  const renderTabContent = () => {
    switch (tab) {
      case OutlineEnum.Card:
        return <OutlineCard />;
      case OutlineEnum.Text:
        return <OutlineText />;
    }
  };
  return (
    <div className={"flex p-8 flex-col bg-base-100 flex-1"}>
      <SubModuleHeader
        title={"Outline"}
        icon={<MdGeneratingTokens />}
        buttonText={"Generate"}
      />
      <div className="divider" />
      <div className={"flex justify-end gap-2 items-center mb-4"}>
        <span className={"flex gap-1 items-center"}>
          <input
            type="radio"
            name="radio-1"
            className="radio"
            checked={tab === OutlineEnum.Card}
            onChange={() => setTab(OutlineEnum.Card)}
          />
          Card
        </span>
        <span className={"flex gap-1 items-center"}>
          <input
            type="radio"
            name="radio-1"
            className="radio"
            checked={tab === OutlineEnum.Text}
            onChange={() => setTab(OutlineEnum.Text)}
          />
          Text
        </span>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default Outline;
