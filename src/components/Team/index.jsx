import Goalkeeper from './Goalkeeper';
import Defender from './Defender';
import Midfielders from './Midfielders';
import Forwards from './Forwards';
import Coaches from './Coaches';

const Team = () => (
  <div>
    <div className="p-8 bg-[#FAE115] font-bold uppercase text-5xl">Teams</div>
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
