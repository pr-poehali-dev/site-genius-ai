import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeMenu, setActiveMenu] = useState('home');
  const [siteDescription, setSiteDescription] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showGenerateDialog, setShowGenerateDialog] = useState(false);
  const [generateProgress, setGenerateProgress] = useState(0);
  const [isGenerated, setIsGenerated] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: 'Home' },
    { id: 'generate', label: 'Generate Site', icon: 'Sparkles' },
    { id: 'projects', label: 'My Projects', icon: 'FolderOpen' },
    { id: 'settings', label: 'Settings', icon: 'Settings' },
    { id: 'support', label: 'Support', icon: 'HelpCircle' }
  ];

  const examples = [
    {
      id: 1,
      title: "Artist Portfolio",
      description: "Minimal gallery showcase",
      image: "/img/1df2ab85-51e8-40e5-b826-f8eec6336764.jpg"
    },
    {
      id: 2,
      title: "Restaurant Site",
      description: "Menu and booking system",
      image: "/img/2d60f3c4-fa36-4400-8e58-641230afc892.jpg"
    },
    {
      id: 3,
      title: "E-commerce Store",
      description: "Product catalog and cart",
      image: "/img/e42bb838-89c6-4e77-95c7-20757eec17c9.jpg"
    },
    {
      id: 4,
      title: "Agency Landing",
      description: "Services and contact form",
      image: "/img/1df2ab85-51e8-40e5-b826-f8eec6336764.jpg"
    }
  ];

  const handleGenerate = () => {
    if (!siteDescription.trim()) return;
    
    setShowGenerateDialog(true);
    setIsGenerating(true);
    setGenerateProgress(0);
    
    // Simulate generation progress
    const interval = setInterval(() => {
      setGenerateProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setIsGenerated(true);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <header className="h-16 bg-primary border-b border-primary/20">
        <div className="flex items-center justify-between h-full px-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">G</span>
            </div>
            <span className="text-white font-bold text-xl font-inter">Site Genius AI</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Log in
            </Button>
            <Button className="bg-white text-primary hover:bg-white/90">
              Sign up
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-muted">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveMenu(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                      activeMenu === item.id
                        ? 'bg-primary text-white font-semibold'
                        : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                    }`}
                  >
                    <Icon name={item.icon} className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex">
          {/* Center Panel */}
          <div className="flex-1 p-8 max-w-2xl">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2 font-inter">
                  Describe your site
                </h1>
                <p className="text-muted-foreground text-lg font-open-sans">
                  Just type what kind of site you want: e-commerce store, photographer portfolio, restaurant microsite…
                </p>
              </div>

              <Card className="border-muted">
                <CardContent className="p-6">
                  <Textarea
                    placeholder="e.g., Photographer portfolio in minimal style with gallery, contact form and blog section"
                    value={siteDescription}
                    onChange={(e) => setSiteDescription(e.target.value)}
                    className="min-h-[200px] text-lg border-muted resize-none focus:ring-primary"
                  />
                  
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Icon name="Lightbulb" className="w-4 h-4 mr-2" />
                      Be specific about style, features, and content
                    </div>
                    <Button 
                      onClick={handleGenerate}
                      disabled={!siteDescription.trim()}
                      size="lg"
                      className="px-8 py-3 text-lg font-semibold"
                    >
                      <Icon name="Sparkles" className="w-5 h-5 mr-2" />
                      Generate Site
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Templates */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Quick start templates:</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    className="h-auto p-4 justify-start"
                    onClick={() => setSiteDescription("Modern photographer portfolio with minimal design, gallery grid, about page, and contact form")}
                  >
                    <Icon name="Camera" className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Photography Portfolio</div>
                      <div className="text-xs text-muted-foreground">Gallery + Contact</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-auto p-4 justify-start"
                    onClick={() => setSiteDescription("E-commerce store with product catalog, shopping cart, checkout, and user accounts")}
                  >
                    <Icon name="ShoppingBag" className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Online Store</div>
                      <div className="text-xs text-muted-foreground">Products + Cart</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-auto p-4 justify-start"
                    onClick={() => setSiteDescription("Restaurant website with menu, online reservations, location, and photo gallery")}
                  >
                    <Icon name="UtensilsCrossed" className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Restaurant Site</div>
                      <div className="text-xs text-muted-foreground">Menu + Booking</div>
                    </div>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="h-auto p-4 justify-start"
                    onClick={() => setSiteDescription("Corporate business website with services, team, testimonials, and contact information")}
                  >
                    <Icon name="Building2" className="w-5 h-5 mr-3" />
                    <div className="text-left">
                      <div className="font-medium">Business Site</div>
                      <div className="text-xs text-muted-foreground">Services + Team</div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <aside className="w-80 bg-white border-l border-muted p-6">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Recent examples</h3>
                <div className="space-y-4">
                  {examples.map((example) => (
                    <Card key={example.id} className="overflow-hidden cursor-pointer group hover:shadow-md transition-shadow">
                      <div className="aspect-video bg-muted relative overflow-hidden">
                        <img 
                          src={example.image} 
                          alt={example.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-medium">
                            View →
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-3">
                        <h4 className="font-medium text-sm text-foreground">{example.title}</h4>
                        <p className="text-xs text-muted-foreground">{example.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Tips for better results</h3>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start space-x-2">
                    <Icon name="CheckCircle" className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Include specific design style (minimal, modern, vintage)</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="CheckCircle" className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Mention required features and pages</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="CheckCircle" className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Specify color preferences if you have any</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="CheckCircle" className="w-4 h-4 text-secondary mt-0.5" />
                    <span>Describe your target audience</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </main>
      </div>

      {/* Generation Dialog */}
      <Dialog open={showGenerateDialog} onOpenChange={setShowGenerateDialog}>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              {isGenerating ? 'Generating your site...' : 'Your site is ready!'}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {isGenerating && (
              <div className="space-y-4">
                <Progress value={generateProgress} className="w-full" />
                <p className="text-center text-muted-foreground">
                  Generating... {generateProgress}%
                </p>
              </div>
            )}

            {isGenerated && (
              <Tabs defaultValue="preview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="preview" className="flex items-center space-x-2">
                    <Icon name="Eye" className="w-4 h-4" />
                    <span>Preview</span>
                  </TabsTrigger>
                  <TabsTrigger value="edit" className="flex items-center space-x-2">
                    <Icon name="Edit3" className="w-4 h-4" />
                    <span>Edit</span>
                  </TabsTrigger>
                  <TabsTrigger value="publish" className="flex items-center space-x-2">
                    <Icon name="Globe" className="w-4 h-4" />
                    <span>Publish</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="preview" className="space-y-4">
                  <div className="border border-muted rounded-lg overflow-hidden">
                    <div className="h-96 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <Icon name="Monitor" className="w-16 h-16 text-muted-foreground mx-auto" />
                        <p className="text-muted-foreground">Website preview will appear here</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="edit" className="space-y-4">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-medium">Page Structure</h4>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Type" className="w-4 h-4 mr-2" />
                          Edit Header
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Image" className="w-4 h-4 mr-2" />
                          Change Images
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Icon name="Palette" className="w-4 h-4 mr-2" />
                          Color Scheme
                        </Button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium">Block Settings</h4>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="title">Block Title</Label>
                          <Input id="title" placeholder="Enter title..." />
                        </div>
                        <div>
                          <Label htmlFor="color">Text Color</Label>
                          <Input id="color" type="color" value="#374151" />
                        </div>
                        <Button className="w-full">
                          <Icon name="Upload" className="w-4 h-4 mr-2" />
                          Change Image
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 pt-4 border-t">
                    <Button className="flex-1">
                      <Icon name="Save" className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button variant="outline">
                      <Icon name="X" className="w-4 h-4 mr-2" />
                      Close Editor
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="publish" className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="subdomain">Choose subdomain:</Label>
                      <div className="flex">
                        <Input 
                          id="subdomain" 
                          placeholder="yoursite" 
                          className="rounded-r-none"
                        />
                        <div className="px-3 py-2 bg-muted border border-l-0 rounded-r-md text-muted-foreground text-sm">
                          .site-genius.ai
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="flex-1">
                        <Icon name="Globe" className="w-4 h-4 mr-2" />
                        Publish Site
                      </Button>
                      <Button variant="outline">
                        <Icon name="Download" className="w-4 h-4 mr-2" />
                        Download ZIP
                      </Button>
                    </div>

                    <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                      <div className="flex items-center space-x-2 text-secondary">
                        <Icon name="CheckCircle" className="w-5 h-5" />
                        <span className="font-medium">Site published successfully!</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Your site is live at: <span className="font-medium">https://yoursite.site-genius.ai</span>
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-muted py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © 2025 Site Genius AI
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact Us
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;