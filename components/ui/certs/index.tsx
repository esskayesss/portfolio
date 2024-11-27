import React from "react";
import {AcademiconsCourseraSquare} from "@/components/ui/icons/coursera";
import {MaterialSymbolsTrophyOutline} from "@/components/ui/icons/trophy";
import {CibKaggle} from "@/components/ui/icons/kaggle";

const icons_map = {
  'Coursera': <AcademiconsCourseraSquare />,
  'Kaggle': <CibKaggle />,
  'Contest': <MaterialSymbolsTrophyOutline />,
}

interface CertListEntryProps {
  title: string;
  issuer: 'Coursera' | 'Kaggle' | 'Contest';
  href: string | undefined;
  children: React.ReactNode;
}

export const CertListEntry: React.FC<CertListEntryProps> = ({children: body, ...props}) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-col">
        <div className='flex justify-between items-center'>
          <h2>{props.title}</h2>
          <span className={'text-xl'}>{icons_map[props.issuer]}</span>
        </div>
      </div>
      <p className={'text-sm text-dim-fg'}>{body}</p>
    </div>
  )
}