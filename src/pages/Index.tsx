import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [playerCount, setPlayerCount] = useState('2');
  const [accessType, setAccessType] = useState('public');
  const [coins, setCoins] = useState(14);

  return (
    <div className="min-h-screen bg-background text-foreground p-4 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <Icon name="ArrowLeft" size={24} className="text-muted-foreground" />
          <h1 className="text-xl font-medium">Battles</h1>
        </div>
        <div className="flex items-center gap-2">
          <Icon name="MoreVertical" size={20} className="text-muted-foreground" />
          <Icon name="X" size={20} className="text-muted-foreground" />
        </div>
      </div>

      {/* Main Title */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Создать битву</h2>
        <div className="flex items-center gap-2 bg-primary/20 px-3 py-1 rounded-full">
          <div className="w-2 h-2 bg-primary rounded-full"></div>
          <span className="text-sm font-medium">{coins}</span>
          <Icon name="Plus" size={16} />
        </div>
      </div>

      {/* Gift Selection Card */}
      <Card className="mb-8 bg-card border-border transition-all duration-200 hover:scale-[1.02] cursor-pointer">
        <CardContent className="p-6">
          <div className="flex items-center justify-center mb-4">
            <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center transition-colors duration-200 hover:bg-secondary/80">
              <Icon name="Plus" size={32} className="text-muted-foreground" />
            </div>
          </div>
          <h3 className="text-lg font-medium text-center mb-2">Выбрать</h3>
          <p className="text-center text-muted-foreground">подарок</p>
        </CardContent>
      </Card>

      {/* Players Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Игроков</h3>
        <RadioGroup 
          value={playerCount} 
          onValueChange={setPlayerCount}
          className="flex gap-4"
        >
          {['2', '3', '4'].map((count) => (
            <div key={count} className="flex items-center space-x-2">
              <RadioGroupItem 
                value={count} 
                id={`players-${count}`}
                className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label 
                htmlFor={`players-${count}`} 
                className="text-lg font-medium cursor-pointer"
              >
                {count}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Access Type Section */}
      <div className="mb-12">
        <h3 className="text-lg font-medium mb-4">Доступ</h3>
        <RadioGroup 
          value={accessType} 
          onValueChange={setAccessType}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="public" 
              id="access-public"
              className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label 
              htmlFor="access-public" 
              className="text-lg font-medium cursor-pointer"
            >
              Публичный
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem 
              value="private" 
              id="access-private"
              className="border-primary data-[state=checked]:bg-primary data-[state=checked]:border-primary"
            />
            <Label 
              htmlFor="access-private" 
              className="text-lg font-medium cursor-pointer"
            >
              Частный
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Create Battle Button */}
      <Button 
        className="w-full h-12 text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
        onClick={() => {
          setCoins(coins - 1);
          alert(`Битва создана! Игроков: ${playerCount}, Доступ: ${accessType === 'public' ? 'Публичный' : 'Частный'}`);
        }}
      >
        Создать битву
      </Button>
    </div>
  );
}