create table stats (
  id SERIAL PRIMARY KEY,
  last_ping timestamp,
  create_date: timestamp not null,
  update_date: timestamp not null,
)