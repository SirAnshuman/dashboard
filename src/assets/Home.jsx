import { BsFillPiggyBankFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaShopware, FaSellsy } from "react-icons/fa";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";
import { BsSearch } from "react-icons/bs";

import { RiArrowDropDownLine } from "react-icons/ri";

function Home() {
  const data = [
    {
      name: "Jan",
      Amount: 5400,
    },
    {
      name: "Feb",
      Amount: 4000,
    },
    {
      name: "Mar",
      Amount: 4200,
    },
    {
      name: "April",
      Amount: 5500,
    },
    {
      name: "May",
      Amount: 3100,
    },
    {
      name: "June",
      Amount: 2800,
    },
    {
      name: "July",
      Amount: 5700,
    },
    {
      name: "Aug",
      Amount: 2000,
    },
    {
      name: "Sept",
      Amount: 2300,
    },
    {
      name: "Oct",
      Amount: 4400,
    },
    {
      name: "Nov",
      Amount: 3500,
    },
    {
      name: "Dec",
      Amount: 2800,
    },
  ];

  const data2 = [
    { name: "Data 1", value: 300, innerRadius: "60%", outerRadius: "80%" },
    { name: "Data 2", value: 1000, innerRadius: "82%", outerRadius: "85%" },
    { name: "Data 3", value: 700, innerRadius: "86%", outerRadius: "90%" },
  ];

  const COLORS = ["#f62a91", "#6139ea", "#f1effc"];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card card1">
          <div className="card-inner">
            <RiMoneyDollarCircleFill className="card_icon1 circle-icon1" />
          </div>
          <div>
            <p className="card-head">Earnings</p>
            <h1>$300k</h1>
            <p>
              <span className="up">⬆27.5%</span> this month.
            </p>
          </div>
        </div>
        <div className="card card2">
          <div className="card-inner">
            <FaShopware className="card_icon2 circle-icon2" />
          </div>
          <div>
            <p className="card-head">Orders</p>
            <h1>$2.4k</h1>
            <p>
              <span className="down">↓2%</span> this month.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <BsFillPiggyBankFill className="card_icon3 circle-icon3" />
          </div>
          <div>
            <p className="card-head">Balance</p>
            <h1>$2.4k</h1>
            <p>
              <span className="down">↓2%</span> this month.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <FaSellsy className="card_icon4 circle-icon4" />
          </div>
          <div>
            <p className="card-head">Total Sales</p>
            <h1>$89k</h1>
            <p>
              <span className="up">⬆11.5%</span> this month.
            </p>
          </div>
        </div>
      </div>

      <div className="charts">
        <div className="chart1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={800}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <Tooltip cursor={false} />

              <Bar dataKey="Amount" fill="#f2efff" className="hoverable-bar" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="pie">
          <div className="pie-head">
            <h2 className="customer-head">Customers</h2>
            <p className="customer-content">Customers that buy product</p>
          </div>
          <div>
            <PieChart width={350} height={300}>
              <Pie
                data={data2}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                fill="#8884d8"
                paddingAngle={5}
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <text
                x={175}
                y={135}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="30"
                className="centre"
              >
                65%
              </text>
              <text
                x={175}
                y={160}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
              >
                Total New
              </text>
              <text
                x={175}
                y={175}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
              >
                Customers
              </text>
            </PieChart>
          </div>
        </div>
      </div>

      <div className="table">
        <div className="top">
          <p className="table-head">Product Sell</p>
          <div className="table-search">
            <span className="search">
              <BsSearch className="icon" />
              <span>Search</span>
            </span>
            <span className="dropdown">
            <span>Last 30 days</span>
            <RiArrowDropDownLine className="icon" />
            </span>
          </div>
        </div>

        <div className="top content">
          <p className="table-head">Product Name</p>
          <div className="table-search">
            <div className="row2">
              <p className="one">Stock</p>
              <p className="one">Price</p>
              <p className="one">Total Sales</p>
            </div>
          </div>
        </div>

        <div className="top table-row table-row2">
          <img src="public/images/img1.jpg" className="image1" />
          <div className="row2-content">
            <h3 className="row2-content1">Abstract 3D</h3>
            <p className="row2-content2">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="table-search">
            <div className="row2">
              <p className="two1">32 in stock</p>
              <p className="two2">$ 45.99</p>
              <p className="two3">20</p>
            </div>
          </div>
        </div>

        <div className="top table-row table-row2">
          <img src="public/images/img2.jpg" className="image1" />
          <div className="row2-content">
            <h3 className="row2-content1">Sarphens Illustration</h3>
            <p className="row2-content2">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="table-search">
            <div className="row2">
              <p className="two1">30 in stock</p>
              <p className="two2">$ 48.00</p>
              <p className="two3">25</p>
            </div>
          </div>
        </div>

        <div className="top table-row table-row2">
          <img src="public/images/img3.jpg" className="image1" />
          <div className="row2-content">
            <h3 className="row2-content1">Gradiance</h3>
            <p className="row2-content2">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="table-search">
            <div className="row2">
              <p className="two1">32 in stock</p>
              <p className="two2">$ 45.99</p>
              <p className="two3">20</p>
            </div>
          </div>
        </div>

        <div className="top table-row table-row2">
          <img src="public/images/img4.jpg" className="image1" />
          <div className="row2-content">
            <h3 className="row2-content1">Artist Purge</h3>
            <p className="row2-content2">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="table-search">
            <div className="row2">
              <p className="two1">32 in stock</p>
              <p className="two2">$ 45.99</p>
              <p className="two3">20</p>
            </div>
          </div>
        </div>

        <div className="top table-row table-row2">
          <img src="public/images/img5.jpg" className="image1" />
          <div className="row2-content">
            <h3 className="row2-content1">Covenant</h3>
            <p className="row2-content2">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </div>
          <div className="table-search">
            <div className="row2">
              <p className="two1">32 in stock</p>
              <p className="two2">$ 45.99</p>
              <p className="two3">20</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
