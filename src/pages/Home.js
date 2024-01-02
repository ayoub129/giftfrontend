// scroll top component
import ScrollToTop from "../components/ScrollToTop";

// components
import Searchhome from "../components/Searchhome";
import Latest from "../components/Latest";
import ForHimHome from "../components/ForHimHome";
import ForHimTwo from "../components/ForHimTwo";
import Trending from "../components/Trending";

function Home() {
  return (
    <div>
      <ScrollToTop />
      <Trending />
      <ForHimHome />
      <ForHimTwo />
      <Searchhome  />
      <Latest />
    </div>
  );
}

export default Home;
