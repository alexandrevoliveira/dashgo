import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { ElementType } from 'react';
import Link from 'next/link';

interface NavLinkProps extends ChakraLinkProps {
  children: string;
  href: string;
  icon: ElementType;
}

export function NavLink({ children, href, icon, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  );
}