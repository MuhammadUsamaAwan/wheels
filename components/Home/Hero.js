import { Input, Select, Button, Form } from "antd";
import { SearchOutlined, ArrowRightOutlined } from "@ant-design/icons";
const { Option, OptGroup } = Select;

const Hero = () => {
  return (
    <header className="hero">
      <h1 className="hero__heading">Find Used Vehicles in Pakistan</h1>
      <h2 className="hero__subtile">
        With thousands of vehicles, we have just the right one for you
      </h2>
      <Form layout="inline">
        <Form.Item>
          <Input.Group compact>
            <Form.Item>
              <Select placeholder="Vehicle Type" size="large">
                <Option value="car">Car</Option>
                <Option value="Bikes">Bikes</Option>
                <Option value="van">Van</Option>
                <Option value="bus">Bus</Option>
                <Option value="truck">Truck</Option>
                <Option value="rikshaw">Rikshaw</Option>
                <Option value="tractor">Tractor</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Input placeholder="Vehicle Make or Model" size="large" />
            </Form.Item>
            <Form.Item>
              <Select defaultValue="All Cities" size="large">
                <Option value="All Cities">All Cities</Option>
                <OptGroup label="Popular Cities">
                  <Option value="Karachi">Karachi</Option>
                  <Option value="Lahore">Lahore</Option>
                  <Option value="Islamabad">Islamabad</Option>
                </OptGroup>
                <OptGroup label="Other Cities">
                  <Option value="Rawalpindi">Rawalpindi</Option>
                  <Option value="Peshawar">Peshawar</Option>
                </OptGroup>
              </Select>
            </Form.Item>
            <Form.Item>
              <Select placeholder="Price Range" size="large">
                <Option value="5lacs">5 Lacs</Option>
                <Option value="10lacs">10 Lacs</Option>
                <Option value="15lacs">15 Lacs</Option>
                <Option value="20lacs">20 Lacs</Option>
                <Option value="25lacs">25 Lacs</Option>
                <Option value="30lacs">30 Lacs</Option>
              </Select>
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SearchOutlined />}
              size="large"
            />
          </Input.Group>
        </Form.Item>
      </Form>

      <form className="hero__form--mobile">
        <Input placeholder="Search Vehicles" />
      </form>
      <Button type="default">
        Advance Search
        <ArrowRightOutlined />
      </Button>
    </header>
  );
};

export default Hero;
