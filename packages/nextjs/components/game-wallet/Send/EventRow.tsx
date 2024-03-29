import { formatEther } from "viem";
import { Address } from "~~/components/scaffold-eth";

/**
 * History Event row
 */
export const EventRow = ({ eventData }: { eventData: any }) => {
  return (
    <div className="flex flex-col gap-2 animate-fadeIn">
      <div className="flex gap-2 mb-4 items-center">
        <div className="flex flex-col">
          <span>
            You <span className="font-bold">sent</span> {formatEther(eventData.value || "0")}
          </span>
          <div className="flex gap-2">
            to
            <Address address={eventData.to} disableAddressLink={true} />
          </div>
        </div>
      </div>
    </div>
  );
};
