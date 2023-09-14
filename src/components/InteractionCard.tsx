import React from "react";

interface InteractionCardProps {
    serverComponent: React.ReactNode;
}

const InteractionCard: React.FC<InteractionCardProps> = ({serverComponent}) => {
  return (
    <div className="relative bg-white shadow-md hover:shadow-lg hover:bg-neutral-200">
      {serverComponent}
    </div>
  );
};

export default InteractionCard;
