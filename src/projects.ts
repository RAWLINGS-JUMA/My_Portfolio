export type CaseStudy = {
    title: string;
    desc: string;
};

export const caseStudies: Record<string, CaseStudy> = {
    project1: {
        title: "CASE STUDY- ALBION UNIVERSITY MULTI CAMPUS DESIGN",
        desc: `
Albion University is a large university that has two campuses situated 20 miles apart. The university’s students and staff are distributed into four faculties; these include the faculties of Health and Sciences; Business; Engineering/Computing and Art/Design. Each member of Staff has a PC and students have access to PCs in the labs.
Requirements;
a.Create a network topology with the main components to support the following.
Main Campus
oBuilding A: Administrative staff in the department of management, HR and Finance. The Administration staff PC are distributed in the building offices and is expected that they will share some networking equipment (Hint, use of VLANs is expected here). The faculty of business is also situated in this building.
oBuilding B: Faculty of Engineering and Computing and faculty of Art and Design.
oBuilding C: Student’s labs and IT department. The IT department hosts the University web server and other servers.
oThere is also an email server hosted externally on the cloud.

Smaller Campus
oFaculty of Health and sciences (staff and students labs are situated on separate floors).

b.You will be expected to configure the core devices and few end devices to provide end to end connectivity and access to the internal server.
Each department or faculty is expected to be on its own IP network.
The switches should be configured with appropriate VLANs and security settings.
RIPv2 will be used to provide routing for the routers in the internal network and static routing for the external server.
The devices in building A will be expected to acquire dynamic IP addresses from a router based DHCP server.
Tasks
Task 1: Your task is to plan, design, and prototype the network topology for the Albion University’s network using cisco packet tracer.
Task 2: Configure in packet tracer the network with appropriate settings to achieve the connectivity and functionalities specified in the requirements.
Task 3: Produce a report (max 1500 words) including evaluation your proposed network design and critical appraisal on your work. Your evaluation should include performance, scalability, reliability and security of your proposed network.`

    },


    project2: {
        title: "CASE STUDY -ENTERPRISE NETWORKING PROJECT ",
        desc: `

Radeon Company Ltd is a US owned company that deals with banking and insurance. The company is intending to expand its services across the African Continent having the first branch to be located in Nairobi-Kenya. The company has secured a four-story building to operate within the Kenya Capital City. Therefore, the company would like to allow sourcing the knowledge from a group of final-year students from the local university to design and implement their company network. Assume you are among the students to take over this role, carefully read down the requirements then model the design and implement the network based on the company’s needs. Each floor has departments as provided.
First Floor
No.	Departments	No of PC	No. of Printers
1	Management	20	4
2	Research	20	4
3	HR	20	4

Second Floor
No.	Departments	No of PC	No. of Printers
1	Marketing	20	4
2	Accounting	20	4
3	Finance	20	4

Third Floor
No.	Departments	No of PC	No. of Printers
1	Logistics and Store	20	4
2	Customer Care	20	4
3	Guest Area	20	2

Fourth Floor
No.	Departments	No of PC	No. of Printers	No. of servers.
1	Admin	20	2	
2	ICT	20	2	
3	Server Room	2 Adm PCs		3(DHCP, HTTP, and Email)
Requirements:
1.Use a software modelling tool to visualize the network topology (consider requirement 3).
Software modelling Tools: MS Visio, Visual Paradigm, or Draw.io for modelling network design.
2.Use any of the following network simulation software to implement the above topology.
Simulation Software: Cisco Packet tracer, GNS3, eNSP for design and implementation.
There should be one router in each floor. The router should be connecting switches on that floor.
Use OSPF as the routing protocol to advertise routes.
Each department is required to have a wireless network for the users.
Each department except the server room will be anticipated to have around 60 users both wired and wireless users.
Host devices in the network are required to obtain IPv4 address automatically.
Devices in all the departments are required to communicate with each other.
All devices in the network are expected to obtain an IP address dynamically from the dedicated DHCP server located at the server room.
Create HTTP, and Email servers.
Configure SSH in all the routers for remote login.
3.Use hierarchical network design with redundancy included:
Having core, distribution, and access layers.  

4.Configure the basic configurations of the devices.
Hostnames.
Line console VTY passwords.
Banner messages.
Disable domain IP lookup.
5.Each department should be in a different VLAN.
Create VLAN in every department.
VLANs you will use in your case, including VLAN 1, also e.g. 10,20,30
Each VLAN should be a different subnetwork.
6.Planning of IP addresses.
You have been given 192.168.10.0 as the base address for this network.
Do subnetting based on the number of hosts in every department as provided above.
Identify subnet mask, usable IP address range, and broadcast address for each subnet.
7.End device configurations.
Configure all the end devices in the network with appropriate IP address based on the calculation above.
8.Configure port-security.
Use sticky command to obtain MAC address.
Violation mode of the shutdown
9.Test communication.
Do devices in the same VLAN communicate?
DO devices in different VLANs communicate?
10.Document the project design and implementation.
Department	Network Address	Subnet mask	Host IP Range	Broadcast Address
1.Management	192.168.10.0	255.255.255.192/26	192.168.10.1-192.168.10.62	192.168.10.63
2.Research	192.168.10.64	255.255.255.192/26	192.168.10.65-192.168.10.126	192.168.10.127
3.HR	192.168.10.128	255.255.255.192/26	192.168.10.129-192.168.10.190	192.168.10.191
First Floor

Department	Network Address	Subnet mask	Host IP Range	Broadcast Address
1.Marketing	192.168.10.192	255.255.255.192/26	192.168.10.193-192.168.10.254	192.168.10.255
2.Accounting	192.168.11.0	255.255.255.192/26	192.168.11.1-192.168.11.62	192.168.11.63
3.Finance	192.168.11.64	255.255.255.192/26	192.168.11.65-192.168.11.126	192.168.11.127
Second Floor

Department	Network Address	Subnet mask	Host IP Range	Broadcast Address
1.Logistics&Store	192.168.11.128	255.255.255.192/26	192.168.11.129-192.168.11.190	192.168.11.191
2.Customer care	192.168.11.192	255.255.255.192/26	192.168.11.193-192.168.11.254	192.168.11.255
3.Guest Area	192.168.12.0	255.255.255.192/26	192.168.12.1-192.168.12.62	192.168.112.63
Third Floor

Department	Network Address	Subnet mask	Host IP Range	Broadcast Address
1.Admin	192.168.12.64	255.255.255.192/26	192.168.12.65-192.168.126	192.168.12.127
2.ICT	192.168.12.128	255.255.255.192/26	192.168.12.129-192.168.12.190	192.168.12.191
3.Server Room	192.168.12.192	255.255.255.192/26	192.168.12.193-192.168.12.254	192.168.12.254
Fourth FLoor

Between Routers and Layer 3 Switches
No	Network Address	Subnet Mask	Host IP Range	Broadcast Address
1	10.10.10.0	255.255.255.252/32	10.10.10.1-10.10.10.2	10.10.10.3
2	10.10.10.4	255.255.255.252/32	10.10.10.5-10.10.10.6	10.10.10.7
3	10.10.10.8	255.255.255.252/32	10.10.10.9-10.10.10.10	10.10.10.11
4	10.10.10.12	255.255.255.252/32	10.10.10.13-10.10.10.14	10.10.10.15
5	10.10.10.16	255.255.255.252/32	10.10.10.17-10.10.10.18	10.10.10.19
6	10.10.10.20	255.255.255.252/32	10.10.10.21-10.10.10.22	10.10.10.23
7	10.10.10.24	255.255.255.252/32	10.10.10.25-10.10.10.26	10.10.10.27
8	10.10.10.28	255.255.255.252/32	10.10.10.29-10.10.10.30	10.10.10.31
9	10.10.10.32	255.255.255.252/32	10.10.10.33-10.10.10.34	10.10.10.35
10	10.10.10.36	255.255.255.252/32	10.10.10.37-10.10.10.38	10.10.10.39
11	10.10.10.40	255.255.255.252/32	10.10.10.41-10.10.10.42	10.10.10.43
12	10.10.10.44	255.255.255.252/32	10.10.10.45-10.10.10.46	10.10.10.47
13	10.10.10.48	255.255.255.252/32	10.10.10.49-10.10.10.50	10.10.10.51
14	10.10.10.52	255.255.255.252/32	10.10.10.53-10.10.10.54	10.10.10.55

`
    },
     project3: {
        title: " CASE STUDY-ENTERPRISE HEALTHCARE NETWORK AND SECURITY ARCHITECTURE",
        desc: `
Design and Implementation of a Secure Healthcare Network System (Project #11)

Dr. Devi Shetty-Labs Limited is an Indian healthcare service provider specializing in diagnostic and related healthcare tests. Headquartered in Mumbai, the company conducts tests on blood, urine, and various human bodily tissues. It strategically employs information technology to digitize and securely access and market its services. The company's offices are located on the 35th, 36th, and 37th floors of the Great Namaste Towers. On the 35th floor, you'll find the Pharmacy and Medical Labs, serving approximately 200 users, along with the Reception and Guest Area accommodating around 1000 users. The 36th floor houses the Doctors and Consultancy department, catering to about 200 users, and also manages Procurement, HR, and Finance operations for 300 users. The 37th floor is divided between Internal Auditors and Corporate functions, involving around 120 users, and an entire IT team consisting of 300 users. The IT department is further structured into various teams, including Brand and Digital Marketing, IT Support, System/Network Admin, Network Security Engineers, Cybersecurity Analysts, Software Engineers, Cloud Engineers, and IT Management. Recognizing substantial growth potential, the company anticipates that the user count for each department will double by 2025, necessitating a focus on scalability during the design and implementation phases.
As an integral part of the company's ICT infrastructure, the following components have been incorporated:
Internet Services Provider (ISP): The company has established a subscription with Airtel to ensure internet connectivity.
Network Security: A Cisco ASA Firewall from the 5500-X series has been acquired to enhance network security.
Network Routing: A Cisco WAN  Router has been deployed to facilitate efficient data routing within the network. Note- For some reason, this  router will be used for VoIP services.
Switching Infrastructure: The network includes two Catalyst 3850 48-Port Switches, eight Catalyst 2960 48-Port Switches, and two Catalyst 2960 24-Port Switches to ensure robust local network connectivity.
Server Hardware and Virtualization: Two HP ProLiant DL38 Gen10 servers will be utilized for virtualization through the VMWare ESXi hypervisor. They will host multiple virtual machines, including a Red Hat Directory Server responsible for managing user information in an LDAP-based directory. This server will handle DNS services and IPv4 address allocation for DHCP hosts. The two servers are used for fail-over purposes.
Internal Servers: Internally hosted servers include a Health Information System, Email server, and File server, ensuring data accessibility and security.
Storage: Two storage devices, NetApp product will be used to facilitate storage of resources.
Voice and Wireless Infrastructure: Cisco Voice Gateways will be employed for VoIP and telephony services. Additionally, a Cisco Wireless LAN Controller (WLC) and ten Lightweight Access Points (LAPs) will centralize the management of the wireless network.
Cloud computing as an important technology is used to connect clients across the world to the company services and resources thus the healthcare system is linked to the AWS cloud platform to facilitate service delivery thus this is one of the core business functions of the firm. The developers and cloud engineers use several cloud resources to ensure seamless business continuity. The proposed network should allow the team access to these resources.

Due to security requirements, it has been decided that all LAN, WLAN, and VoIP users will be on a separate network segment within the same local area network. The firewall will be used to set security zones and filter traffic that moves in and out of the zones based on the configured inspection policies.
You have been hired as a network security engineer to design the network according to the requirements set by the senior management. You will consult an appropriate robust network design model to meet the design requirements. You are required to design and implement a secured, reliable, scalable, and robust network system that is paramount to safeguarding the Confidentiality, Integrity, and Availability of data and communication.
The company places a strong emphasis on achieving top-tier performance, redundancy, scalability, and availability within its network infrastructure. As such, your task involves creating a comprehensive network design and executing its implementation. To facilitate this endeavor, the company has designated specific IP address ranges:
WLAN: The WLAN network will operate within the IP address range of 10.10.0.0/16.
LAN: For the local area network (LAN), the IP address range of 192.168.0.0/20 has been allocated.
Voice: The Voice network will utilize the IP address range of 172.16.0.0/20.
DMZ: The Demilitarized Zone (DMZ) will be assigned IP addresses from the range 10.20.20.0/26.
Public Addresses: Public IP addresses from the range 197.200.100.0 have been allocated for externalfacing services, ensuring a visible and accessible presence on the internet.
Technologies Implemented
1.Design Tool: Utilize  Cisco Packet Tracer for designing and implementing the network solution.
2.Hierarchical Design: Implement a hierarchical model that incorporates redundancy for enhanced network resilience.
3.ISPs: Establish connectivity to an Airtel ISP Router within the network infrastructure.
4.WLC: Ensure that each department is equipped with a Wireless Access Point (WAP) to provide WiFi access to employees, corporate users, external auditors, and guests, all centrally managed by a Wireless LAN Controller (WLC).
5.VoIP: Deploy IP phones in each department to support Voice over IP (VoIP) communication.
6.VLAN: Maintain VLANs with the following IDs: 10 for LAN, 50 for WLAN, and 99 for VoIP across the entire network.
7.EtherChannel: Implement the Link Aggregation Control Protocol (LACP) for EtherChannel configuration, enhancing link aggregation efficiency.
8.STP PortFast and BPDUguard: Configure Spanning Tree Protocol (STP) PortFast and BPDUguard to expedite port transitions from blocking to forwarding states.
9.Subnetting: Utilize subnetting techniques to allocate the appropriate number of IP addresses to each network group.
10.Basic Settings: Configure fundamental device settings, including hostnames, and console passwords, enable passwords, banner messages, password encryption, and disable IP domain lookup.
11.Inter-VLAN Routing: Enable devices in all departments to communicate with one another by configuring the respective multilayer switch for inter-VLAN routing.
12.Core Switch: Assign IP addresses to Multilayer switches to enable both routing and switching functionalities.
13.DHCP Server: Ensure that all devices in the network (excluding IP phones) obtain IP addresses dynamically from Active Directory (AD) servers located at the server farm site.
14.Cisco 2811  Router: Deploy a Cisco Catalyst 2811  router capable of supporting telephony services.
15.HSRP: Implement high-availability router protocols such as HSRP to achieve redundancy, load balancing, and failover capabilities.
16.Static Addressing: Allocate static IP addresses to devices located in the server room.
17.Telephony Service: Configure Voice over IP (VoIP) on the WAN router and assign dial numbers in the format (3...).
18.Routing Protocol: Utilize Open Shortest Path First (OSPF) as the routing protocol to advertise routes on the firewall, routers, and multilayer switches.
19.Standard ACL for SSH: Establish a simple standard Access Control List (ACL) on the VTY line to permit remote administrative tasks via SSH only for the Senior Network Security Engineer PC.
20.Cisco ASA Firewall: Configure default static routes, basic settings, security levels, zones, and policies on the Cisco ASA Firewall to define access control and resource utilization within the network.
21.Final Testing: Conduct thorough testing to verify proper communication and ensure that all configured elements function as intended.
Between Shettylabs Network
Category	Network and Subnet Mask	Valid Host Addresses	Default gateway	Broadcast Address
WLAN	10.10.0.0/16	10.10.0.1 to 10.10.255.254	10.10.0.1	10.10.255.254
LAN	192.168.0.0/20	192.168.0.1 to 192.168.15.254	192.168.0.1	192.168.15.255
VoIP	172.16.0.0/24	172.16.0.1 to 172.16.15.254	172.16.0.1	172.16.15.255
DMZ	10.20.20.0/26	10.20.20.0 to 10.20.20.10.62	10.20.10.1	10.20.10.63

Between the cloud, ISP, Firewall, Routers, and L3 Switches
CLOUD	30.0.0.0/30
ISP-CLOUD	20.20.20.0/30
FWL-ISP	197.200.100.0/30
FWL-WAN ROUTER	10.30.10.0/30
WANROUTER-MLSW1	10.30.10.4/30
WANROUTER-MLSW2	10.30.10.8/30

`
    },
     project4: {
        title: " CASE STUDY-VIC-MODEM HOTEL NETWORK DESIGN AND IMPLEMENTATION",
        desc: `HOTEL NETWORK
As part of your end year networking project, you are required to design and implement Vic Modem Hotel network. The Hotel has three floors; in the first floor, there are three departments (reception, Store, and Logistics), in the second floor, there are threw departments (Finance, HR and Sales and Marketing), while the third floor hosts the IT and Admin. Therefore, the following are part of the considerations during the design and implementation.
1.there should be three routers connecting each floor (all placed in server room in IT department).
2.All routers should be connected to each other using serial DCE cable.
3.The network between the routers should be 10.10.10.0/30, 10.10.10.4/30, 10.10.10.8/30.
4.Each floor is expected to have WIFI networks connected to laptops and phones.
5.Each department is expected to have a printer.
6.Each floor is expected to have one switch (placed in the respective floors)
7.Each department is expected to be in different VLAN with the following details.
First Floor;
Reception-VLAN 80, network of 192.168.8.0/24
Store-VLAN 70 network of 192.168.7.0/24
Logistics-VLAN 60 network of 192.168.6.0/24
Second Floor;
Finance-VLAN 50, network of 192.168.5.0/24
HR-VLAN 40- network of 192.168.4.0/24
Sales-VLAN 30, network of 192.168.3.0/24
Third Floor;
Admin-VLAN 20, network of 192.168.2.0/24
IT-VLAN 10 network of 192.168.1.0/24
8.Use OSPF as the routing protocol to advertise routes.
9.All devices in the network are expected to obtain IP address dynamically with their respective router configured as DHCP server.
10.All the devices in the network are expected to communicate with each other.
11.Configure SSH in all the routers for remote login.
12.In IT department, add PC called test-PC to port fa0/1 and use it to test remote login.
13.Configure port security to IT – department switch to allow only Test-PC to access port fa0/1. (Use sticky method to obtain mac-address with violation mode of shuts.own) 
  

`
    },
 project5: {
        title: " CASE STUDY-CAIRO TELCO SECURE NETWORK DESIGN AND CLOUD INTEGRATED INFRASTRUCTURE",
        desc: `Design and Implementation of a Secure Telecommunication Company Network System
Cairo Telco is a fast-growing telecommunication company in Egypt, which offers IT solutions and services to its clients. The company is located in the Egyptian capital city, Cairo, and has occupied the fourth and fifth floors of Pharaoh’s Mega Plaza. The company has its fourth-floor hosting HR and Finance (40), Product Brand and Marketing (45), and finally, Admin and Corporate departments (35). The fifth floor is designed for IT Network & Support (45), Software Engineering department (32).
As a part of ICT infrastructure, the company has subscribed to Sea-com ISP for internet services an also has purchased one 5525-X Cisco ASA Firewall, one catalyst 3850 48 port switch, 3 catalyst 2960 48-port switches, 1 Cisco voice gateway, 1 Cisco WLC, and 6 LAP. The company uses Windows server 2022to manage the active directory and radius server, the server is responsible for DNS service and for allocating IPv4 addresses to the DHCP hosts in the network. The company has an internally hosted ERP system, Email Server, and File Server. The company has settled on using Cisco Voice Gateways to provide VoIP or telephony services in the network and Cisco WLC to provide central management for AP’s.
Cairo telco Leverages using Microsoft Azure cloud platform to facilitate service delivery thus this is the one of the core business functions of the firm. The developers and cloud engineers use several MS Azure resources like VM, blob storage, networking, and security among others to ensure seamless business continuity. The proposed network should allow the team access to these resources.
Due to security requirements, it has been decided that all LAN, WLAN, and VoIP users will be on a separate network segment within the same local area network. The firewall will be used to set security zones and filter traffic that moves in and out of the zones based on the configured inspection policies.
You have been hired as a network security engineer to design the network for Cairo Telco according to the requirements set by the senior management. You will consult an appropriate robust network design model to meet the design requirements. You are required to design and implement a secured, reliable, scalable, and robust network system that is paramount to safeguarding the Confidentiality, Integrity, and Availability of data and communication.
Requirements.
The company has emphasized high performance, redundancy, scalability, and availability, and hence you are required to provide a complete Cairo Telco network infrastructure design and implementation. The company will be using the following IP address: 10.20.0.0/16 for WLAN, 192.168.10.0/24 for LAN, 172.16.10.0/24 for Data, 10.10.10.0/24 for Voice, 10.10.10.0/28 for DMZ and 197.200.100.0 for public addresses.
Requirements.
1.Design Tool. Use Cisco packet tracer to design and implement the network solution.
2.Hierarchical Design. Use a hierarchical model providing redundancy.
3.ISPs. The network is also expected to connect to a Sea-com Router.
4.WLC. Each department is required to have a WAP providing both employees and guest WIFI managed by WLC.
5.VoIP.Each department should have IP phones.
6.VLAN. The LAN, WLAN, and VoIP VLANs remain at 50, 60, &101v respectively for the entire network.
7.Ether-Channel. Use Standard LACP as a method of link aggregation.
8.STP Port Fast and BPDU guard.  Configure the two protocols to enable faster port transition from blocking to forwarding.
9.Subnetting. Provided the networks above, carry out sub-netting to allocate the correct number of IP addresses to each department.
10.Basic settings. Configure basic device settings such us host-names, and console passwords, banner messages, encrypt all passwords, and disable IP domain lookup.
11.Inter-VLAN routing. Devices in all the departments are required to communicate with each other with the respective multi-layer switch configured for inter-VLAN routing.
12.Core Switch. The multi-layer switches are expected to carry out both routing and switching functionalities and thus will be assigned IP addresses.
13.DHCP Server. All devices in the network (except IP Phones) are expected to obtain an IP address dynamically from the dedicated DHCP servers located at the server-side site.
14.Cisco 2811 router. Ensure to have a router that can support telephony service i.e Cisco Catalyst 2811 (the VoIP router should be connected to the 13-switch).
15.Static addressing. Devices in the server room are to be allocated IP addresses statically.
16.Telephony service. Configure VoIP on the voice gateway router and allocate dial numbers in format (1..).
17.Routing protocol. Use OSPF as the routing protocol to advertise routes both on the routers and multi-layer switches.
18.Standard ACL for SSH. Configure a simple standard ACL on the line VTY to allow only the ICT department (Security Network Engineer) to carry out all remote administrative tasks using SSH.
19.Cisco ASA Firewall. Configure security levels, zones, and policies to define how resources are accessed in the network.
20.Final. Test Communication, ensure everything configured is working as expected.

Subnetting Table
Cairo Telco Network
Category	Network And Sub-net Mask	Valid Host Addresses	Default Gateway	Broadcast
WLAN	10.20.0.0/16	10.20.0.1-10.20.255.254	10.20.0.1	10.20.255.254
LAN	192.168.10.0/24	192.168.10.1-192.168.10.254	192.168.10.1	192.168.10.255
VoIP	172.16.10.0/24	172.16.10.1-172.16.10.254	172.16.10.1	172.16.10.255
DMZ	10.10.10.0/28	10.10.10.1-10.10.10.14	10.10.10.1	10.10.10.15


NO	Network Address
FWL-CORE SW	10.30.30.0/30
FWL-ISP	197.200.100.0/30
ISP - CLOUD	20.20.20.0/30
CLOUD	30.30.30.30/8




`
    }

};
