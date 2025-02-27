import Icon from '@/components/icon/Icon';
import Collapse from '@/components/collapse/Collapse';

export const PatientInfo = () => {
  return (
    <div className="space-y-4">
      <Collapse title="Angelina Perreira" defaultOpen>
        <div className="space-y-4 border-t border-system-light-200 pt-4">
          <div className="flex items-start gap-2">
            <Icon name="calendar" size={18} viewBox="0 0 18 18" />
            <div className="flex flex-col gap-1">
              <span className="text-system-dark-500 text-caption-bold">DOB</span>
              <span className="text-system-dark-900 text-body">03 July 1992</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Icon name="call" size={18} viewBox="0 0 18 18" />
            <div className="flex flex-col gap-1">
              <span className="text-system-dark-500 text-caption-bold">Phone</span>
              <span className="text-system-dark-900 text-body">+1 (903) 533 0955</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Icon name="message" size={18} viewBox="0 0 18 18" />
            <div className="flex flex-col gap-1">
              <span className="text-system-dark-500 text-caption-bold">Email</span>
              <span className="text-system-dark-900 text-body">perreira@gmail.com</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Icon name="pin-map" size={18} viewBox="0 0 18 18" />
            <div className="flex flex-col gap-1">
              <span className="text-system-dark-500 text-caption-bold">Address</span>
              <span className="text-system-dark-900 text-body">1010 11th St. Sausalito, CA 96922</span>
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};