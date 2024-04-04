import { Button, Flex } from "antd";
import "./App.css";

import {
  ArrowLeftOutlined,
  PoweroffOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import type { ConfigProviderProps } from "antd";
import { FaEthernet } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";

type SizeType = ConfigProviderProps["componentSize"];

function Buttons() {
  const [size, setSize] = useState<SizeType>("large");
  return (
    <>
      <Flex vertical gap="small" style={{ width: "100%" }}>
        <Button type="primary" block>
          Login
        </Button>

        <Button type="primary" block>
          Run Diagnostics
        </Button>

        <Button type="primary" block>
          Save
        </Button>

        <Button block>Cancel</Button>

        <Button block>Documentation</Button>
        <Button block>Add Network</Button>

        <Button block>Logout</Button>

        <Button block>ACTIVATED</Button>

        <Button type="primary" icon={<PoweroffOutlined />} />

        <Button type="primary" icon={<LuRefreshCw />} />

        <Button color="black" icon={<ArrowLeftOutlined />} size={size}>
          Connection Settings
        </Button>
      </Flex>

      <Button
        type="primary"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={<WifiOutlined />}
        size={size}
      >
        Wifi
      </Button>

      <Button
        type="primary"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        icon={<FaEthernet />}
        size={size}
      >
        Ethernet
      </Button>
    </>
  );
}

export default Buttons;
