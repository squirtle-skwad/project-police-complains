import { useEffect, useState } from 'react';
import _ from 'lodash';
import { subDays } from 'date-fns';
import { Button } from 'bootstrap';

const DateRange =
() => {
  const [range, setRange] = useState([]);

  useEffect(() => {
    const today = new Date();
    const interval = _.range(9, -1, -1).map(d => subDays(today, d)).map(d => d.getDate());
    setRange(interval);
  }, []);

  const buttons = range.map(d => 
    <Button size="sm" className="circle">{d}</Button>
  );

  return (
    <div>
    </div>
  );
};

const Sidebar =
() => {
  return (
    <div id="sidebar" className="shadow">
    </div>
  );
};

export default Sidebar;
