import { Button, Center, Flex, Image, Input } from "@chakra-ui/react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/cart.svg";
import Logout from "../../assets/logout.svg";
import { theme } from "../../styles/theme";

export const Header = () => {
	return (
		<Flex
			h="75px"
			bg="gray.50"
			px={["5", "20"]}
			py="2"
			justifyContent="space-between"
			alignItems="center"
		>
			<Flex p="16px" align="center">
				<Image src={Logo} />
			</Flex>

			<Center>
				<Center
					border="2px solid "
					borderColor="gray.100"
					justifyContent="flex-end"
					borderRadius="8px"
					h="50px"
					w={["150px", "250px", "350px", "350px"]}
					_hover={{ borderColor: "gray.300" }}
				>
					<Input
						border="none"
						h="50px"
						_focusVisible={{ border: "none" }}
						placeholder="Digitar Pesquisa"
						fontSize="sm"
						_placeholder={{ color: "gray.100" }}
					/>
					<Button
						bg="primary.default"
						mr="2"
						w="12"
						h="8"
						position="absolute"
						_hover={{ bg: "primary.hover" }}
					>
						<FaSearch color={theme.colors.white} />
					</Button>
				</Center>
				<Button bg="none" _hover={{ bg: "none" }}>
					<Image src={Cart} />
				</Button>
				<Button bg="none" _hover={{ bg: "none" }}>
					<Image src={Logout} />
				</Button>
			</Center>
		</Flex>
	);
};
