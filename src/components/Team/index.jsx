import Goalkeeper from './Goalkeeper.jsx';
import Defender from './Defender.jsx';
import Midfielders from './Midfielders.jsx';
import Forwards from './Forwards.jsx';
import Coaches from './Coaches.jsx';

const Team = () => (
  <div>
    <div className="p-8 bg-[#FAE115] font-bold uppercase text-5xl">
      Teams
    </div>
    {/* Goalkeeper */}
    <Goalkeeper />
    {/* Defenders */}
    <Defender />
    {/* Midfielders */}
    <Midfielders />
    {/* Forwards */}
    <Forwards />
    {/* Coach */}
    <Coaches />
  </div>
);

export default Team;
