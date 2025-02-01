import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

type WindowType = '2-track' | '2+1-track' | '3-track';
type BarringType = '2-inch' | '4-inch';

interface Measurements {
  height: number;
  length: number;
}

interface CalculationResult {
  finalHeight: number;
  finalLength: number;
  glassHeight: number;
  glassLength: number;
  barringHeight: number;
  barringLength: number;
}

const WindowCalculator = () => {
  const [windowType, setWindowType] = useState<WindowType>('2-track');
  const [barringType, setBarringType] = useState<BarringType>('2-inch');
  const [measurements, setMeasurements] = useState<Measurements>({ height: 0, length: 0 });
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculateDimensions = () => {
    if (windowType === '2-track') {
      const finalHeight = measurements.height - 1.4;
      const finalLength = (measurements.length - 6.35) / 2;
      const glassHeight = measurements.height - 2.4;
      const glassLength = measurements.length + 0.5;
      const barringHeight = measurements.height - 3;
      const barringLength = measurements.length + 0.5;

      setResult({
        finalHeight,
        finalLength,
        glassHeight,
        glassLength,
        barringHeight,
        barringLength
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 p-6">
      <div className="max-w-2xl mx-auto space-y-8 animate-fade-in">
        <Card className="p-6 shadow-lg">
          <h1 className="text-3xl font-bold text-text mb-6 text-center">
            Window Cutting Calculator
          </h1>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-text-light">Window Type</label>
              <Select
                value={windowType}
                onValueChange={(value) => setWindowType(value as WindowType)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select window type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2-track">2 Track Window</SelectItem>
                  <SelectItem value="2+1-track">2+1 Track Window</SelectItem>
                  <SelectItem value="3-track">3 Track Window</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {windowType === '2-track' && (
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-light">Barring Type</label>
                <Select
                  value={barringType}
                  onValueChange={(value) => setBarringType(value as BarringType)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select barring type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2-inch">2 Inch Barring</SelectItem>
                    <SelectItem value="4-inch">4 Inch Barring</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-light">Height (inches)</label>
                <Input
                  type="number"
                  value={measurements.height || ''}
                  onChange={(e) => setMeasurements(prev => ({
                    ...prev,
                    height: parseFloat(e.target.value) || 0
                  }))}
                  placeholder="Enter height"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-light">Length (inches)</label>
                <Input
                  type="number"
                  value={measurements.length || ''}
                  onChange={(e) => setMeasurements(prev => ({
                    ...prev,
                    length: parseFloat(e.target.value) || 0
                  }))}
                  placeholder="Enter length"
                />
              </div>
            </div>

            <Button 
              className="w-full bg-primary hover:bg-primary-dark text-white"
              onClick={calculateDimensions}
            >
              Calculate
            </Button>
          </div>
        </Card>

        {result && (
          <Card className="p-6 shadow-lg animate-slide-up">
            <h2 className="text-2xl font-bold text-text mb-4">Results</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-text-light">Final Height</p>
                <p className="text-lg font-semibold">{result.finalHeight.toFixed(2)} inches</p>
              </div>
              <div>
                <p className="text-sm text-text-light">Final Length</p>
                <p className="text-lg font-semibold">{result.finalLength.toFixed(2)} inches</p>
              </div>
              <div>
                <p className="text-sm text-text-light">Glass Height</p>
                <p className="text-lg font-semibold">{result.glassHeight.toFixed(2)} inches</p>
              </div>
              <div>
                <p className="text-sm text-text-light">Glass Length</p>
                <p className="text-lg font-semibold">{result.glassLength.toFixed(2)} inches</p>
              </div>
              <div>
                <p className="text-sm text-text-light">Barring Height</p>
                <p className="text-lg font-semibold">{result.barringHeight.toFixed(2)} inches</p>
              </div>
              <div>
                <p className="text-sm text-text-light">Barring Length</p>
                <p className="text-lg font-semibold">{result.barringLength.toFixed(2)} inches</p>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default WindowCalculator;