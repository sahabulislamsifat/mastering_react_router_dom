import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const FooterComponent = () => {
  return (
    <div>
      <Footer container className="dark:bg-white px-10">
        <div className="w-full text-center dark:text-gray-800">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-center sm:justify-start">
              <FooterBrand
                href="/"
                src="
              https://www.citypng.com/public/uploads/preview/brown-coffee-cup-logo-design-hd-png-701751694776791z8t9jck4mz.png"
                alt="Coffee House"
              />
              <p className="text-xl font-medium text-gray-800">Coffee</p>
            </div>
            <FooterLinkGroup className="dark:text-gray-800">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
          <FooterDivider />
          <FooterCopyright href="#" by="all rights reserved ™" year={2025} />
        </div>
      </Footer>
    </div>
  );
};

export default FooterComponent;
