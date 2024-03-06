// Inside your React component file

import React from "react";
import { Typography, Row, Col, Card } from "antd";
import Navbar from "../shared/Navbar";

const { Title, Paragraph } = Typography;

const TargetAudienceSection = () => {
  return (
    <div>
      <div className="target-audience-section min-h-[72vh] overflow-x-hidden  py-10">
        <div className="container mx-auto">
          <Title level={2} className="text-center mb-6">
            Who can benefit from our Task Management Website?
          </Title>

          <Row gutter={16} justify="center">
            {/* Developer Card */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                className="target-card shadow-xl"
                title="Developers"
                bordered={false}
              >
                <Paragraph>
                  Task organization and collaboration for efficient project
                  management.
                </Paragraph>
              </Card>
            </Col>

            {/* Corporate Professionals Card */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card
                className="target-card"
                title="Corporate Professionals"
                bordered={false}
              >
                <Paragraph>
                  Streamline tasks and improve productivity in a corporate
                  environment.
                </Paragraph>
              </Card>
            </Col>

            {/* Bankers Card */}
            <Col xs={24} sm={12} md={8} lg={6}>
              <Card className="target-card" title="Bankers" bordered={false}>
                <Paragraph>
                  Efficiently manage financial tasks and deadlines for bankers.
                </Paragraph>
              </Card>
            </Col>

            {/* Add more target audience cards as needed */}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TargetAudienceSection;
