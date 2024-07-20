import React from "react";

interface ISubModuleHeader {
  title: string;
  icon: React.ReactElement;
  buttonText: string;
}
const SubModuleHeader = (props: ISubModuleHeader) => {
  const { title, icon, buttonText } = props;
  return (
    <div className={"flex justify-between items-center"}>
      {title}
      <button className="btn btn-outline btn-warning ">
        {icon}
        {buttonText}
      </button>
    </div>
  );
};
export default SubModuleHeader;
